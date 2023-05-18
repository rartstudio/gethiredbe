import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  activity_id: number;

  @Column()
  title: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;
}
