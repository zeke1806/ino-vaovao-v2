import { Resolver, Query } from '@nestjs/graphql';

import { UserService } from '../user.service';
import { User } from '../user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

@Resolver()
export class MeResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() authPayload: AuthPayload): Promise<User> {
    return this.userService.getUserById(authPayload.payload.id);
  }
}
