import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { Message } from '../message/message.entity';

@Entity()
@ObjectType()
export class Discussion {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Field(() => Message)
  lastMessage: Message;
}
