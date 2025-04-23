import { Module } from '@nestjs/common';
import { ReadingController } from './reading.controller';
import { ReadingService } from './reading.service';
import { StationModule } from '@/station/station.module';

@Module({
  imports:[StationModule],
  controllers: [ReadingController],
  providers: [ReadingService]
})
export class ReadingModule {}
