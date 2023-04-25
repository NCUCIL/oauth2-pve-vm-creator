import { Injectable } from '@nestjs/common';
import { CreatePveDto } from './dto/create-pve.dto';
import { UpdatePveDto } from './dto/update-pve.dto';

@Injectable()
export class PveService {
  create(createPveDto: CreatePveDto) {
    return 'This action adds a new pve';
  }

  findAll() {
    return `This action returns all pve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pve`;
  }

  update(id: number, updatePveDto: UpdatePveDto) {
    return `This action updates a #${id} pve`;
  }

  remove(id: number) {
    return `This action removes a #${id} pve`;
  }
}
