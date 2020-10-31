import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { Message } from '../message/message.entity';

@ObjectType()
export class LastMessage {
  @Field(() => Message)
  message: Message;

  @Field()
  view: boolean;
}

@InputType()
export class SaveDiscussionInput {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;
}
