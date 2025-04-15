import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    findUserById(@Body('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Put(':id')
    updateUser(@Body('id') id: number, @Body() body: Prisma.UserUpdateInput) {
        return this.userService.updateUser(id, body);
    }
    
    @Delete(':id')
    deleteUser(@Body('id') id: number) {
        return this.userService.deleteUser(id);
    }
}
