import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { Message } from './message.entity';
import { PaginationMeta } from '../utils/paginationUtils';

@InputType()
export class SendMessageInput {
  @Field({ nullable: true })
  discussionId?: number;

  @Field(() => [Number])
  members: number[];

  @Field()
  discussionName: string;

  @Field()
  content: string;
}

@ObjectType()
export class MessagesResult {
  @Field(() => PaginationMeta)
  paginationMeta: PaginationMeta;

  @Field(() => [Message])
  data: Message[];
}
