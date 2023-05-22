import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIpDto } from './dto/create-ip.dto';
import { UpdateIpDto } from './dto/update-ip.dto';
import { Ip } from './entities/ip.entity';

@Injectable()
export class IpService {

  constructor(
    @InjectRepository(Ip)
    private ipRepository: Repository<Ip>,
  ){}

  create(createIpDto: CreateIpDto) {
    return 'This action adds a new ip';
  }

  findAll() {
    return `This action returns all ip`;
  }

  async allowcateUserIP(id: number) {
    const ip = await this.ipRepository.save(
      this.ipRepository.create({
        vm_id: id,
        ip_address: `10.${id}.0.0`
      }),
    )
    return ip;
  }

  update(id: number, updateIpDto: UpdateIpDto) {
    return `This action updates a #${id} ip`;
  }

  remove(id: number) {
    return `This action removes a #${id} ip`;
  }
}
