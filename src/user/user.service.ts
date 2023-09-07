import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserByPortalId(student_id: string): Promise<User> {
    const user = (await this.userRepository.findOne({
      select: ["email", "vm_id", "identifier"],
      where: {
        student_id: student_id,
      },
    })) as User;
    return user;
  }

  async createUser(identifier: string, email: string, student_id: string): Promise<User> {
    const user = await this.userRepository.save(
      this.userRepository.create({
        identifier: identifier,
        email: email,
        student_id: student_id,
      }),
    );
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
