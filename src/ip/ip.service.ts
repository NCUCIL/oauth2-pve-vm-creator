import { Injectable } from '@nestjs/common';
import { CreateIpDto } from './dto/create-ip.dto';
import { UpdateIpDto } from './dto/update-ip.dto';

@Injectable()
export class IpService {
  create(createIpDto: CreateIpDto) {
    return 'This action adds a new ip';
  }

  findAll() {
    return `This action returns all ip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ip`;
  }

  update(id: number, updateIpDto: UpdateIpDto) {
    return `This action updates a #${id} ip`;
  }

  remove(id: number) {
    return `This action removes a #${id} ip`;
  }
}
