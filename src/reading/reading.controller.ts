import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { StationGuard } from '@/auth/roles/station.guard';
import { Prisma } from 'generated/prisma';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('reading')
export class ReadingController {
    constructor(private readonly readingService: ReadingService) { }

    @UseGuards(JwtAuthGuard, StationGuard)
    @Post(':stationCode')
    createReading(
        @Param('stationCode') stationCode: string,
        @Body() body: Prisma.ReadingCreateInput
    ) {
        console.log('body', body);
        console.log('stationCode', stationCode);
        return this.readingService.createReading(body, stationCode);
    }
}
