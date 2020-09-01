import { Test, TestingModule } from '@nestjs/testing';
import { UserResolvers } from './resolvers';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UtilsModule } from '../utils/utils.module';

class UserRepositoryFake {}

export async function userTestModule(): Promise<TestingModule> {
  return Test.createTestingModule({
    imports: [UtilsModule],
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
