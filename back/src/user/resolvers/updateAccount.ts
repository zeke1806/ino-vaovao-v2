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

export async function ifDataUnchanged(
  data: UpdateAccountInput,
  currentUser: User,
  bcryptService: BcryptService,
): Promise<UpdateAccountError> {
  if (
    data.username === currentUser.username &&
    (await bcryptService.compare(data.password, currentUser.password))
  ) {
    const updateAccountError = new UpdateAccountError();
    updateAccountError.cannotUpdateTheSameInfo = 'Informations inchangee';
    return updateAccountError;
  }
}

export function ifUsernameNotAvailable(
  isUserExist: User,
  currentUser: User,
): UpdateAccountError {
  if (isUserExist && isUserExist.username !== currentUser.username) {
    const updateAccountError = new UpdateAccountError();
    updateAccountError.usernameNotAvailable =
      "Le nom d'utilisateur n'est plus disponible";
    return updateAccountError;
  }
}

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
    _ifDataUnchanged = ifDataUnchanged,
    _ifUsernameNotAvailable = ifUsernameNotAvailable,
  ): Promise<typeof UpdateAccountResult> {
    let response: typeof UpdateAccountResult = null;
    const isUserExist = await this.userService.getUserByUsername(data.username);
    const currentUser = await this.userService.getUserById(
      authPayload.payload.id,
    );

    response = await _ifDataUnchanged(data, currentUser, this.bcryptService);
    if (response) return response;

    response = _ifUsernameNotAvailable(isUserExist, currentUser);
    if (response) return response;

    Object.assign<User, UpdateAccountInput>(currentUser, {
      ...data,
      password: await this.bcryptService.hash(data.password),
    });

    return this.userService.updateUser(currentUser);
  }
}
