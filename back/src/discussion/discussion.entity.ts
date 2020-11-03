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

  @Column()
  @Field()
  name: string;

  @Field(() => LastMessage, { nullable: true })
  lastMessage?: LastMessage;

  @Field(() => [User])
  members: User[];

  @Field(() => User)
  creator: User;
}
