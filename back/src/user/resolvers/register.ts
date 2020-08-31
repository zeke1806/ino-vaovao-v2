import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { RegisterInput, RegisterResult, RegisterError } from '../user.model';
import { UserService } from '../user.service';
import { User } from '../user.entity';

@Resolver()
export class RegisterResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => RegisterResult)
  async register(
    @Args('registerInput') registerInput: RegisterInput,
  ): Promise<typeof RegisterResult> {
    if (!registerInput.username || !registerInput.password) {
      const error = new RegisterError();
      error.fieldEmpty = 'Tous les champs sont obligatoires';
      return error;
    }

    const isUserExist = await this.userService.getUserByUsername(
      registerInput.username,
    );
    if (isUserExist) {
      const error = new RegisterError();
      error.usernameNotAvailable = "Le nom d'utilisateur n'est plus disponible";
      return error;
    }

    const newUser = new User();
    Object.assign<User, RegisterInput>(newUser, registerInput);
    return this.userService.createUser(newUser);
  }
}
