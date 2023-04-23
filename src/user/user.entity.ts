import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User{
    @PrimaryGeneratedColumn()
    id:Number;
    
    @Column({ name: 'student_id' })
    student_id: string;

    @Column({name: 'email'})
    email: string;

    @Column({ name: 'allocated_ip' })
    allocated_ip: string;

    @Column({ name: 'vm_id' })
    vm_id: Number;

    @Column({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'updated_at' })
    updated_at: Date;
}
