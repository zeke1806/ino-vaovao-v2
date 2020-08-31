import { Test, TestingModule } from '@nestjs/testing';

import { userTestModule } from '../user.test-module';
import { UserService } from '../user.service';
import { RegisterResolver } from './register';

describe('RegisterResolver', () => {
  let userService: UserService;
  let registerResolver: RegisterResolver;

  beforeEach(async () => {
    const module: TestingModule = await userTestModule();

    registerResolver = module.get<RegisterResolver>(RegisterResolver);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(registerResolver).toBeDefined();
  });
});
