import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginationMeta {
  @Field()
  itemCount: number;

  @Field()
  totalItems: number;

  @Field()
  itemsPerPage: number;

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;
}

@InputType()
export class PaginationInput {
  @Field({ defaultValue: 1 })
  page: number;

  @Field({ defaultValue: 10 })
  limit: number;
}
