import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { StationService } from './station.service';
import { RolesGuard } from '@/auth/roles/roles.guard';
import { Roles } from '@/auth/roles/roles.decorator';
import { Prisma, Role } from 'generated/prisma';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('station')
export class StationController {
    constructor(private readonly stationService: StationService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Post()
    createStation(@Body() body: Prisma.StationCreateInput, @Body('email') email?: string) {
        return this.stationService.createStation(body, email);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get()
    findAllStations() {
        return this.stationService.getAllStations();
    }

    @Get(":code")
    getStationByCode(@Param('code') code: string) {
        return this.stationService.getStationByCode(code);
    }

    @Get('search')
    searchStationWithPagination(@Query('page') page: number, @Query('limit') limit: number, @Query('search') search: string) {
        return this.stationService.searchStationWithPagination(page, limit, search);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Put(":code")
    updateStation(@Param('code') code: string, @Body() body: Prisma.StationUpdateInput) {
        return this.stationService.updateStation(code, body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Delete(":code")
    deleteStation(@Param('code') code: string) {
        return this.stationService.deleteStation(code);
    }
}
