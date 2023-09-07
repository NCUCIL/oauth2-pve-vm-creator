import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "ips" })
export class Ip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "vm_id" })
  vm_id: number;

  @Column({ name: "ip_address" })
  ip_address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
