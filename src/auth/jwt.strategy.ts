import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';
import { Role } from 'generated/prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'secretKey', // Use a default secret key for development
    });
  }

  async validate(payload: any) {
    if (payload.role === Role.STATION) {
      const station = await this.prisma.station.findUnique({ where: { code: payload.sub } });
      return station; // attaches to request.station
    }

    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    return user; // attaches to request.user
  }
}