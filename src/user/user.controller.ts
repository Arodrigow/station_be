import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    createUser(@Body() body: Prisma.UserCreateInput) {
        return this.userService.createUser(body);
    }

    @Get()
    findAllUsers() {
        return this.userService.getAllUser();
    }

}
