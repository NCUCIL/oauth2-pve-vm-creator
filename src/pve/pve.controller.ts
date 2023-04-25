import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PveService } from './pve.service';
import { CreatePveDto } from './dto/create-pve.dto';
import { UpdatePveDto } from './dto/update-pve.dto';

@Controller('pve')
export class PveController {
  constructor(private readonly pveService: PveService) {}

  @Post()
  create(@Body() createPveDto: CreatePveDto) {
    return this.pveService.create(createPveDto);
  }

  @Get()
  findAll() {
    return this.pveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePveDto: UpdatePveDto) {
    return this.pveService.update(+id, updatePveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pveService.remove(+id);
  }
}
