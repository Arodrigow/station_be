import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { StationGuard } from '@/auth/roles/station.guard';
import { Prisma, Role } from 'generated/prisma';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles/roles.guard';
import { Roles } from '@/auth/roles/roles.decorator';


@Controller('reading')
export class ReadingController {
    constructor(private readonly readingService: ReadingService) { }

    @UseGuards(JwtAuthGuard, StationGuard)
    @Post(':stationCode')
    createReading(
        @Param('stationCode') stationCode: string,
        @Body() body: Prisma.ReadingCreateInput
    ) {
        return this.readingService.createReading(body, stationCode);
    }

    @Get(':stationCode')
    getAllStationReadings(
        @Param('stationCode') stationCode: string,
    ) {
        return this.readingService.getAllStationReadings(stationCode);
    }

    @Get(':stationCode/search')
    searchStationReadings(
        @Param('stationCode') stationCode: string,
        @Query('page') page: number, @Query('limit') limit: number,
        @Query('startDate') startDate: number,
        @Query('endDate') endDate: number) {
            const sDate = startDate ? new Date(Number(startDate)) : undefined;
            const eDate = endDate ? new Date(Number(endDate)) : undefined;
        return this.readingService.searchStationReadingByTime(stationCode, sDate , eDate, page, limit);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Put(':stationCode/:readingId')
    updateReading(
        @Param('stationCode') stationCode: string,
        @Param('readingId') readingId: string,
        @Body() body: Prisma.ReadingUpdateInput
    ) {
        return this.readingService.updateStationReading(stationCode, Number(readingId), body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Delete(':stationCode/:readingId')
    deleteReading(
        @Param('stationCode') stationCode: string,
        @Param('readingId') readingId: string
    ) {
        return this.readingService.deleteStationReading(stationCode, Number(readingId));
    }


}
