import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { Message } from './message.entity';
import { PaginationMeta } from '../utils/paginationUtils';

@InputType()
export class SendMessageInput {
  @Field()
  discussionId: number;

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
