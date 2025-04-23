import { PrismaService } from '@/prisma/prisma.service';
import { StationService } from '@/station/station.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Reading, Prisma } from 'generated/prisma';

@Injectable()
export class ReadingService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly stationService: StationService
    ){}

    async createReading(data: Prisma.ReadingCreateInput, code: string): Promise<Reading> {
        const station = await this.stationService.getStationByCode(code);
        if (!station) {
            throw new NotFoundException('Station not found');
        }
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
}
