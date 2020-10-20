import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SaveDiscussionInput {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;
}
