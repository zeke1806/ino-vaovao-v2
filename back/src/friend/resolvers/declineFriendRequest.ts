import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CurrentUser, GqlAuthGuard } from "../../auth/auth.guards";
import { AuthPayload } from "../../auth/auth.model";
import { UserService } from "../../user/user.service";
import { FriendService } from "../friend.service";

@Resolver()
export class DeclineFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendService: FriendService
  ) { }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async declineFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('userId') userId: number
  ): Promise<boolean> {
    const user = await this.userService.getUserById(userId);
    const friend = await this.userService.getUserById(authPayload.payload.id);

    const friendRequest = await this.friendService.findByUserAndFriend(user, friend);
    friendRequest.user = user;
    friendRequest.friend = friend;
    const removedFriendRequest = await this.friendService.removeFriend(friendRequest);

    return removedFriendRequest && true;
  }
}