import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { IpService } from "./ip.service";
import { CreateIpDto } from "./dto/create-ip.dto";
import { UpdateIpDto } from "./dto/update-ip.dto";

@Controller("ip")
export class IpController {
  constructor(private readonly ipService: IpService) {}

  @Get(":id")
  allowcateUserIp(@Param("user_id") id: number) {
    return this.ipService.allowcateUserIP(+id);
  }
}
