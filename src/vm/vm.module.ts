import { Module } from '@nestjs/common';
import { VmService } from './vm.service';
import { VmController } from './vm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vm } from './entities/vm.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Vm])],
  controllers: [VmController],
  providers: [VmService],
  exports: [VmService]
})
export class VmModule {}
