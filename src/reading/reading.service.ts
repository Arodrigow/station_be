import { PrismaService } from '@/prisma/prisma.service';
import { StationService } from '@/station/station.service';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Reading, Prisma, Station } from 'generated/prisma';

@Injectable()
export class ReadingService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly stationService: StationService
    ) { }

    async createReading(data: Prisma.ReadingCreateInput, code: string): Promise<Reading> {
        const station = await this.getStationToRead(code);
        data.station = { connect: { code: station.code } };

        try {
            const reading = await this.prisma.reading.create({
                data: {
                    station: data.station,
                    vaz: data.vaz,
                    prec: data.prec,
                    lux: data.lux,
                    irr_lux: data.irr_lux,
                    temp: data.temp,
                    pres: data.pres,
                    umi: data.umi,
                    carga: data.carga,
                    v_gen: data.v_gen,
                    a_gen: data.a_gen,
                    w_gen: data.w_gen,
                    irr_gen: data.irr_gen,
                },
            });
            return reading;
        } catch (err) {
            throw new Error('Error creating reading: ' + err.message);
        }
    }

    async getAllStationReadings(code: string) {
        const station = await this.getStationToRead(code);

        try {
            const readings = await this.prisma.reading.findMany({
                where: { stationId: station.id },
                orderBy: { created_at: 'desc' },
            });
            return readings;
        } catch (err) {
            throw new BadRequestException('Error getting readings: ' + err.message);
        }
    }

    async updateStationReading(code: string, id: number, data: Prisma.ReadingUpdateInput): Promise<Reading> {
        const reading = await this.prisma.reading.findUnique({
            where: { id },
        });
        if (!reading) {
            throw new NotFoundException('Reading not found');
        }

        const station = await this.getStationToRead(code);
        if (reading.stationId !== station.id) {
            throw new BadRequestException('Reading does not belong to this station');
        }

        try {
            const reading = await this.prisma.reading.update({
                where: { id },
                data: {
                    ...data,
                    station: { connect: { code: station.code } },
                },
            });
            return reading;
        } catch (err) {
            throw new BadRequestException('Error updating reading: ' + err.message);
        }
    }

    async deleteStationReading(code: string, id: number) {
        const reading = await this.prisma.reading.findUnique({
            where: { id },
        });
        if (!reading) {
            throw new NotFoundException('Reading not found');
        }

        const station = await this.getStationToRead(code);
        if (reading.stationId !== station.id) {
            throw new BadRequestException('Reading does not belong to this station');
        }

        try {
            return await this.prisma.reading.delete({
                where: { id },
            });
        } catch (err) {
            throw new BadRequestException('Error deleting reading: ' + err.message);
        }
    }

    async searchStationReadingByTime(
        code: string,
        startDate: Date = new Date('0000-01-01T00:00:00Z'),
        endDate: Date = new Date(),
        page: number = 1,
        limit: number = 10,) {
        const station = await this.getStationToRead(code);
        const skip = (page - 1) * limit;

        try {
            const stations = await this.prisma.reading.findMany({
                where: {
                    stationId: station.id,
                    AND: [
                        { created_at: { gte: startDate } },
                        { created_at: { lte: endDate } },
                    ]
                },
                skip,
                take: Number(limit),
                orderBy: {created_at: 'desc'}
            });

            return stations;
        } catch (error) {
            console.error('Search error:', error);
            throw new InternalServerErrorException('Error searching readings: ' + error.message);
        }
    }

    async getStationToRead(code: string): Promise<Station> {
        const station = await this.stationService.getStationByCode(code);
        if (!station) {
            throw new NotFoundException('Station not found');
        }
        return station
    }
}