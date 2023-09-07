import { Controller } from "@nestjs/common";
import { Get, Req } from "@nestjs/common";
import { CreateVmDto } from "./dto/create-vm.dto";
import { VmService } from "./vm.service";
import { Vm } from "./interfaces/vm.interface";

@Controller("vm")
export class VmController {
  constructor(private readonly VmService: VmService) {}

  @Get("/getUserUrl")
  async getUserUrl(): Promise<Vm> {
    const vm = await this.VmService.fetchDataFromPVE();
    return vm;
  }
}
