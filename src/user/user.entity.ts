import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'identifier' })
    identifier: string

    @Column({ name: 'student_id' })
    student_id: string;

    @Column({name: 'email'})
    email: string;

    @Column({ name: 'allocated_ip', nullable: true})
    allocated_ip: string;

    @Column({ name: 'vm_id',nullable: true })
    vm_id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
