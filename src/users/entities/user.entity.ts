import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '50' })
  username: string;

  @Column({ length: '64' })
  password: string;

  @Column()
  email: string;

  @Column({ length: '50' })
  firstName: string;

  @Column({ length: '50' })
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
