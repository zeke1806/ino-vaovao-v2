import { Field, InputType } from '@nestjs/graphql';

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
