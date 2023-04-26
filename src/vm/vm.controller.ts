import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VmService } from './vm.service';
import { CreateVmDto } from './dto/create-vm.dto';
import { UpdateVmDto } from './dto/update-vm.dto';

@Controller('vm')
export class VmController {
  constructor(private readonly vmService: VmService) {}

  @Post()
  create(@Body() createVmDto: CreateVmDto) {
    return this.vmService.create(createVmDto);
  }

  @Get()
  findAll() {
    return this.vmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVmDto: UpdateVmDto) {
    return this.vmService.update(+id, updateVmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vmService.remove(+id);
  }
}
