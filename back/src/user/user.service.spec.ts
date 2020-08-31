import { TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { userTestModule } from './user.test-module';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await userTestModule();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
