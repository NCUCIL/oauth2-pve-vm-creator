import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IpService } from './ip.service';
import { CreateIpDto } from './dto/create-ip.dto';
import { UpdateIpDto } from './dto/update-ip.dto';

@Controller('ip')
export class IpController {
  constructor(private readonly ipService: IpService) {}

  @Post()
  create(@Body() createIpDto: CreateIpDto) {
    return this.ipService.create(createIpDto);
  }

  @Get()
  findAll() {
    return this.ipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIpDto: UpdateIpDto) {
    return this.ipService.update(+id, updateIpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipService.remove(+id);
  }
}
