import { Module } from '@nestjs/common';
import { PveService } from './pve.service';
import { PveController } from './pve.controller';

@Module({
  controllers: [PveController],
  providers: [PveService]
})
export class PveModule {}
