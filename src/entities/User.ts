import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
@Index(['email'], { unique: true })
export class User {
  @PrimaryColumn('uuid')
  id: string = uuidv4();

  @Column('varchar', { length: 100 })
  firstName: string = '';

  @Column('varchar', { length: 100, nullable: true })
  lastName?: string;

  @Column('varchar', { length: 255, unique: true })
  email: string = '';

  @CreateDateColumn()
  createdAt: Date = new Date();

  @UpdateDateColumn()
  updatedAt: Date = new Date();
}
