import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'generated/prisma';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async signStation(stationCode: string) {
        return this.jwtService.sign({
            sub: stationCode,
            role: Role.STATION,
        }, { noTimestamp: true })
    }
}
