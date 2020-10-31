import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { LastMessage } from './discussion.types';
import { User } from '../user/user.entity';

@Entity()
@ObjectType()
export class Discussion {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Field(() => LastMessage)
  lastMessage: LastMessage;

  @Field(() => [User])
  participant: User[];
}
