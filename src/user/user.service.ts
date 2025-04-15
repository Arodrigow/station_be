import { BadRequestException, Injectable } from '@nestjs/common';
import { User, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const user = await this.prisma.user.create({data});
        // Check if user was created successfully
        if (!user) {
            throw new BadRequestException('User not created');
        }
        return user;
    }

    async getAllUser() {
        return this.prisma.user.findMany();
    }

    async getUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }
    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> { 
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async deleteUser(id: number): Promise<User> {       
        return this.prisma.user.delete({
            where: { id },
        });
    }
}
