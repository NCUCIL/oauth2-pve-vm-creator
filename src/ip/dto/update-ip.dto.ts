import { PartialType } from "@nestjs/mapped-types";
import { CreateIpDto } from "./create-ip.dto";

export class UpdateIpDto extends PartialType(CreateIpDto) {}
