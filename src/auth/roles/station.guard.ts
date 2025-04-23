import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "generated/prisma";

@Injectable()
export class StationGuard {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.station ?? request.user; // Check if the user is a station or a regular user

        const stationCode = request.params.stationCode; // Get the stationId from the request parameters
        if(user.role === Role.ADMIN) return true;
        if(user.role === Role.STATION && user.code === stationCode) return true; // Check if the user is a station and the stationId matches
        
        return false;
    }
}   
