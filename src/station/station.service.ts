import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Station, Prisma, Role } from 'generated/prisma';

@Injectable()
export class StationService {
    constructor(private readonly prisma: PrismaService,
        private readonly userService: UserService,
    ) { }

    async createStation(data: Prisma.StationCreateInput, email?: string): Promise<Station> {
        if (email) {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                throw new NotFoundException('User not found');
            }
            data.user = { connect: { id: user.id } };
        }

        try {
            const station = await this.prisma.station.create({
                data: {
                    code: data.code,
                    lat: data.lat,
                    long: data.long,
                    muni: data.muni,
                    estado: data.estado,
                    user: data.user
                }
            });
            return station;
        } catch (err) {
            throw new InternalServerErrorException('Error creating station: ' + err.message);
        }
    }

    async getAllStations(): Promise<Station[]> {
        let stations = await this.prisma.station.findMany({
            include: {
                user: true,
            },
        });
        stations.forEach(station => {
            if (station.user) {
                station.user.email = "*********"; // Remove email from user object
                station.user.password = "*********"; // Remove password from user object
                station.user.role = Role.USER; // Remove role from user object
                station.user.phone = "*********"; // Remove phone from user object
                station.user.documento = "*********"; // Remove documento from user object
            }

            return station;
        })

        return stations
    }

    async getStationByCode(code: string): Promise<Station> {
        const station = await this.prisma.station.findUnique({
            where: { code },
            include: {
                user: true,
            },
        });
        return this.checkStationExists(station)
    }

    async getStationByUserId(userId: number): Promise<Station[]> {
        const stations = await this.prisma.station.findMany({
            where: { userId },
            include: {
                user: true,
            },
        });
        // Check if station exists
        return stations;
    }

    async updateStation(id: number, data: Prisma.StationUpdateInput): Promise<Station> {
        if (data.code) {
            throw new BadRequestException('Code is not updatable');
        }

        return await this.prisma.station.update({
            where: { id },
            data,
        });
    }

    async deleteStation(id: number): Promise<Station> {
        const station = await this.prisma.station.delete({
            where: { id },
        });
        // Check if station exists 
        return this.checkStationExists(station);
    }

    async searchStationWithPagination(
        page: number = 1,
        limit: number = 10,
        search: string = ''
    ): Promise<Station[]> {
        const skip = (page - 1) * limit;
        const lowercaseSearch = search.toLowerCase();

        try {
            const stations = await this.prisma.station.findMany({
                where: {
                    OR: [
                        { code: { contains: lowercaseSearch } },
                        { muni: { contains: lowercaseSearch } },
                        { estado: { contains: lowercaseSearch } },
                    ],
                },
                skip,
                take: Number(limit),
                include: {
                    user: true,
                },
            });
    
            return stations;
        } catch (error) {
            console.error('Search error:', error);
            throw new InternalServerErrorException('Error searching stations: ' + error.message);
        }
    }

    checkStationExists(station: Station | null): Station {
        if (!station) {
            throw new NotFoundException('Station not found');
        }
        return station;
    }
}
