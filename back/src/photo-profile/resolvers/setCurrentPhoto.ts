import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { PhotoProfileService } from '../photo-profile.service';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';
import { PhotoProfileUtils } from '../photo-profile.utils';

@Resolver()
export class SetCurrentPhotoResolver {
  constructor(
    private photoProfileService: PhotoProfileService,
    private userService: UserService,
    private photoProfileUtils: PhotoProfileUtils,
  ) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async setCurrentPhoto(
    @Args('publicId') publicId: string,
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<boolean> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    const photo = await this.photoProfileService.getPhotoProfileByPublicId(
      publicId,
    );
    await this.photoProfileUtils.setUserCurrentProfileToFalse(user);
    photo.current = true;
    await this.photoProfileService.createPhotoProfile(photo);
    return true;
  }
}
