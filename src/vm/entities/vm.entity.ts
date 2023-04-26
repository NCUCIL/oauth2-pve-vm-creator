import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'vms' })
export class Vm{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'vm_id' })
    vm_id: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

