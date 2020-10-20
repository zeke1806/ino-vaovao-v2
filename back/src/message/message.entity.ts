import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { User } from '../user/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ name: 'created_at', type: 'time with time zone' })
  createdAt: Date;

  @Column()
  view: boolean;

  @ManyToOne(() => User)
  @JoinColumn()
  sender: User;

  @ManyToOne(() => Discussion)
  @JoinColumn()
  discussion: Discussion;
}
