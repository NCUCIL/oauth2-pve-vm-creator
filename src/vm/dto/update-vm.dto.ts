import { PartialType } from '@nestjs/mapped-types';
import { CreateVmDto } from './create-vm.dto';

export class UpdateVmDto extends PartialType(CreateVmDto) {}
