import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { LoginResolver } from './login';
import { LoginInput, LoginError, LoginToken } from '../auth.model';

describe('LoginResolver', () => {
  let loginResolver: LoginResolver;
  let authService: AuthService;
  let userService: UserService;
  let bcryptService: BcryptService;

  beforeEach(() => {
    authService = new AuthService({} as JwtService);
    userService = new UserService({} as Repository<User>);
    bcryptService = new BcryptService();
    loginResolver = new LoginResolver(authService, userService, bcryptService);
  });

  it('should return LoginError', async () => {
    userService.getUserByUsername = jest.fn().mockResolvedValue(undefined);
    bcryptService.compare = jest.fn().mockResolvedValue(false);
    const result = await loginResolver.login({} as LoginInput);
    expect(userService.getUserByUsername).toHaveBeenCalled();
    expect(result).toBeInstanceOf(LoginError);
  });

  it('should return LoginToken', async () => {
    const expectedResult = new LoginToken();
    expectedResult.token = 'token';
    userService.getUserByUsername = jest.fn().mockResolvedValue(new User());
    bcryptService.compare = jest.fn().mockResolvedValue(true);
    authService.login = jest.fn().mockResolvedValue(expectedResult.token);
    const result = await loginResolver.login({} as LoginInput);
    expect(result).toEqual(expectedResult);
    expect(authService.login).toHaveBeenCalled();
  });
});
