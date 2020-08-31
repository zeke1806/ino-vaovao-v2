import { Test, TestingModule } from '@nestjs/testing';

import { userTestModule } from '../user.test-module';
import { UserService } from '../user.service';
import { RegisterResolver } from './register';
import { RegisterInput, RegisterError } from '../user.model';
import { User } from '../user.entity';

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

  it('should cause an error when there are empty fields', async () => {
    const registerInput: RegisterInput = {
      username: '',
      password: '',
    };

    const result = (await registerResolver.register(
      registerInput,
    )) as RegisterError;
    expect(result).toBeInstanceOf(RegisterError);
    expect(result.fieldEmpty).toBeDefined();
  });
});
