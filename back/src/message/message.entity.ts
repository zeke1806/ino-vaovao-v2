import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { Discussion } from '../discussion/discussion.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class Message {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @Field(() => User)
  @ManyToOne(() => User)
  @JoinColumn()
  sender: User;
  @RelationId((message: Message) => message.sender)
  senderId: number;

  @ManyToOne(() => Discussion, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn()
  discussion: Discussion;
  @Field()
  @RelationId((message: Message) => message.discussion)
  discussionId: number;
}
