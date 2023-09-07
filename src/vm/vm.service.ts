import { Injectable } from "@nestjs/common";
import { Vm } from "./interfaces/vm.interface";
import axios from "axios";

@Injectable()
export class VmService {
  private readonly vm: Vm[] = [];

  async fetchDataFromPVE(): Promise<Vm> {
    try {
      const response = await axios.get("https://example.api");
      const url = response.data;
      const vm: Vm = { url };
      return vm;
    } catch (error) {
      throw error;
    }
  }
}
