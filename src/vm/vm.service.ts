import { Injectable } from '@nestjs/common';
import { CreateVmDto } from './dto/create-vm.dto';
import { UpdateVmDto } from './dto/update-vm.dto';

@Injectable()
export class VmService {
  create(createVmDto: CreateVmDto) {
    return 'This action adds a new vm';
  }

  findAll() {
    return `This action returns all vm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vm`;
  }

  update(id: number, updateVmDto: UpdateVmDto) {
    return `This action updates a #${id} vm`;
  }

  remove(id: number) {
    return `This action removes a #${id} vm`;
  }
}
