import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return 'hello ino vaovao api';
  }
}
