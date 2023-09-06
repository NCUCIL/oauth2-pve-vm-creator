import { Injectable } from '@nestjs/common';
import { Vm } from './interfaces/vm.interface';

@Injectable()
export class VmService {

    private readonly vm: Vm[] = [];

  getUserUrl(): Vm[] {
    return this.vm;
  }
}
