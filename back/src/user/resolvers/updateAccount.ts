import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { User } from '../user.entity';
import {
  UpdateAccountInput,
  UpdateAccountResult,
  UpdateAccountError,
} from '../user.model';
import { UserService } from '../user.service';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { BcryptService } from '../../utils/bcrypt.service';

@Resolver()
export class UpdateAccountResolver {
  constructor(
    private userService: UserService,
    private bcryptService: BcryptService,
  ) {}

  @Mutation(() => UpdateAccountResult)
  @UseGuards(GqlAuthGuard)
  async updateAccount(
    @Args('updateAccountInput') data: UpdateAccountInput,
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<typeof UpdateAccountResult> {
    const isUserExist = await this.userService.getUserByUsername(data.username);
    const currentUser = await this.userService.getUserById(
      authPayload.payload.id,
    );

    if (
      data.username === currentUser.username &&
      (await this.bcryptService.compare(data.password, currentUser.password))
    ) {
      const updateAccountError = new UpdateAccountError();
      updateAccountError.cannotUpdateTheSameInfo = 'Informations inchangee';
      return updateAccountError;
    }

    if (isUserExist && isUserExist.username !== currentUser.username) {
      const updateAccountError = new UpdateAccountError();
      updateAccountError.usernameNotAvailable =
        "Le nom d'utilisateur n'est plus disponible";
      return updateAccountError;
    }

    Object.assign<User, UpdateAccountInput>(currentUser, {
      ...data,
      password: await this.bcryptService.hash(data.password),
    });

    return this.userService.updateUser(currentUser);
  }
}
