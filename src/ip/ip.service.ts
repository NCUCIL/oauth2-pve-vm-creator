import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateIpDto } from "./dto/create-ip.dto";
import { UpdateIpDto } from "./dto/update-ip.dto";
import { Ip } from "./entities/ip.entity";

@Injectable()
export class IpService {
  constructor(
    @InjectRepository(Ip)
    private ipRepository: Repository<Ip>,
    private dataSource: DataSource,
  ) {}

  // find vm is exist or not, if is not exist, allowcate ip to vm and return ip
  async allowcateUserIP(id: number) {
    const ip = await this.dataSource.getRepository(Ip).createQueryBuilder("ip").where("ip.vm_id = :id", { id }).getOne();

    if (ip) {
      return ip;
    } else {
      const ip = await this.ipRepository.save(
        this.ipRepository.create({
          vm_id: id,
          ip_address: `10.${id / 255}.${id % 255}.0`,
        }),
      );
      return ip;
    }
  }
}
