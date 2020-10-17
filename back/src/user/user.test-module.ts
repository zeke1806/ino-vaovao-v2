import { Test, TestingModule } from '@nestjs/testing';
import { UserResolvers } from './resolvers';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UtilsModule } from '../utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import configs from '../configs';

class UserRepositoryFake {}

export async function userTestModule(): Promise<TestingModule> {
  return Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({
        load: [configs],
      }),
      UtilsModule,
    ],
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
