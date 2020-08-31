import { Test, TestingModule } from '@nestjs/testing';
import { UserResolvers } from './resolvers';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';

class UserRepositoryFake {}

export async function userTestModule(): Promise<TestingModule> {
  return Test.createTestingModule({
    providers: [
      ...UserResolvers,
      UserService,
      {
        provide: getRepositoryToken(User),
        useClass: UserRepositoryFake,
      },
    ],
  }).compile();
}
