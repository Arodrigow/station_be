import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { FastifyReply, FastifyRequest } from 'fastify';
  import { Prisma } from '../../../generated/prisma';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<FastifyReply>();
      const request = ctx.getRequest<FastifyRequest>();
  
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message: any = 'Internal server error';
  
      // Handle NestJS HttpExceptions
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        message = exception.getResponse();
      }
  
      // Handle known Prisma errors
      else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
        status = HttpStatus.BAD_REQUEST;
        message = {
          code: exception.code,
          target: (exception.meta as any)?.target,
          details: exception.message,
        };
      }
  
      // Handle unknown Prisma errors (e.g. initialization, runtime)
      else if (exception instanceof Prisma.PrismaClientInitializationError ||
               exception instanceof Prisma.PrismaClientRustPanicError ||
               exception instanceof Prisma.PrismaClientUnknownRequestError) {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = {
          type: exception.name,
          details: exception.message,
          stack: process.env.NODE_ENV === 'development' ? exception.stack : undefined,
        };
      }
  
      // Send final response
      response.status(status).send({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message,
      });
    }
  }
  