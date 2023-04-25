import { PartialType } from '@nestjs/mapped-types';
import { CreatePveDto } from './create-pve.dto';

export class UpdatePveDto extends PartialType(CreatePveDto) {}
