import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [UserModule],
  providers: [StationService],
  controllers: [StationController],
  exports: [StationService]
})
export class StationModule { }
