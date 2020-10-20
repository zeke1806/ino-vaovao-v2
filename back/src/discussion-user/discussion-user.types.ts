import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AffectUsersToDiscussionInput {
  @Field()
  discussionId: number;

  @Field(() => [Number])
  usersId: number[];
}
