import { Mutation, Resolver, Args } from '@nestjs/graphql';

import { LoginInput, LoginResult, LoginToken, LoginError } from '../auth.model';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { User } from '../../user/user.entity';

@Resolver()
export class LoginResolver {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private bcryptService: BcryptService,
  ) {}

  @Mutation(() => LoginResult)
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<typeof LoginResult> {
    const user: User = await this.userService.getUserByUsername(
      loginInput.username,
    );

    if (
      !user ||
      !(await this.bcryptService.compare(loginInput.password, user.password))
    ) {
      const loginError = new LoginError();
      loginError.incorrectInfo = 'Informations de login incorrectes';
      return loginError;
    }

    const loginToken = new LoginToken();
    loginToken.token = await this.authService.login({ id: user.id });
    return loginToken;
  }
}
