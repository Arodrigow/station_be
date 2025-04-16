import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import * as bc from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) { }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const saltRounds = this.configService.get<string>('HASH_SALTROUNDS');
        if (!saltRounds) {
          throw new BadRequestException('Salt rounds not defined in config');
        }
      
        const { password, ...rest } = data;
        if (!password) {
          throw new BadRequestException('Password is required');
        }
      
        try {
          const salt = await bc.genSalt(parseInt(saltRounds, 10));
          const hashedPassword = await bc.hash(password, salt);
      
          const user = await this.prisma.user.create({
            data: {
              ...rest,
              password: hashedPassword,
            },
          });
      
          return user;
        } catch (err) {
          throw new BadRequestException('Error creating user: ' + err.message);
        }
      }

    async getAllUser() {
        return this.prisma.user.findMany();
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        // Check if user exists 
        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return await this.prisma.user.update({
            where: { id },
            data,
        });
    }

    async deleteUser(id: number): Promise<User> {
        return await this.prisma.user.delete({
            where: { id },
        });
    }

}
