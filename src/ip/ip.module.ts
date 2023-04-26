import { Module } from '@nestjs/common';
import { IpService } from './ip.service';
import { IpController } from './ip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ip } from './entities/ip.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ Ip ])],
  controllers: [IpController],
  providers: [IpService],
  exports: [IpService],
})
export class IpModule {}
