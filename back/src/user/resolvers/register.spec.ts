import { TestingModule } from '@nestjs/testing';

import { userTestModule } from '../user.test-module';
import { UserService } from '../user.service';
import { RegisterResolver } from './register';
import { RegisterInput, RegisterError } from '../user.model';
import { User } from '../user.entity';
import { BcryptService } from '../../utils/bcrypt.service';

describe('RegisterResolver', () => {
  let userService: UserService;
  let registerResolver: RegisterResolver;
  let bcryptService: BcryptService;

  beforeEach(async () => {
    const module: TestingModule = await userTestModule();

    registerResolver = module.get<RegisterResolver>(RegisterResolver);
    userService = module.get<UserService>(UserService);
    bcryptService = module.get<BcryptService>(BcryptService);
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

  it('should cause an error when username not available', async () => {
    const registerInput: RegisterInput = {
      username: 'user',
      password: 'password',
    };
    jest
      .spyOn(userService, 'getUserByUsername')
      .mockImplementation(async () => {
        const user = new User();
        Object.assign<User, RegisterInput>(user, registerInput);
        return user;
      });

    const result = (await registerResolver.register(
      registerInput,
    )) as RegisterError;
    expect(result).toBeInstanceOf(RegisterError);
    expect(result.usernameNotAvailable).toBeDefined();
  });

  it('should return an user', async () => {
    const registerInput: RegisterInput = {
      username: 'user',
      password: 'userpassword',
    };
    jest
      .spyOn(userService, 'getUserByUsername')
      .mockImplementation(async () => null);
    jest.spyOn(userService, 'createUser').mockImplementation(async () => {
      const user = new User();
      Object.assign<User, RegisterInput>(user, registerInput);
      return user;
    });
    jest.spyOn(bcryptService, 'hash');

    const result = (await registerResolver.register(registerInput)) as User;
    expect(bcryptService.hash).toHaveBeenCalled();
    expect(result).toEqual(registerInput);
  });
});
