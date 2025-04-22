import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Role } from 'generated/prisma';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    createUser(@Body() body: Prisma.UserCreateInput) {
        return this.userService.createUser(body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get()
    findAllUsers() {
        return this.userService.getAllUser();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findUserById(@Body('id') id: number) {
        return this.userService.getUserById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateUser(@Body('id') id: number, @Body() body: Prisma.UserUpdateInput) {
        return this.userService.updateUser(id, body);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(@Body('id') id: number) {
        return this.userService.deleteUser(id);
    }
}
