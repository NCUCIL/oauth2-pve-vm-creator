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
  getUserIp(@Param('id') id: string) {
    return this.ipService.getUserIp(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipService.remove(+id);
  }
}
