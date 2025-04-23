import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Role, User } from 'generated/prisma';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    //TODO: Only admin can create user, do it before production
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
    findUserById(@Param('id') id: number, @Req() req) {
        const user = req.user as User;
        if (user.id !== id && user.role !== Role.ADMIN) {
            throw new Error('You are not authorized to view this user');
        }
        return this.userService.getUserById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() body: Prisma.UserUpdateInput, @Req() req) {
        const user = req.user as User;
        if (user.id !== id && user.role !== Role.ADMIN) {
            throw new Error('You are not authorized to view this user');
        }
        return this.userService.updateUser(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: number, @Req() req) {
        const user = req.user as User;
        if (user.id !== id && user.role !== Role.ADMIN) {
            throw new Error('You are not authorized to view this user');
        }
        return this.userService.deleteUser(id);
    }
}
