import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

import { CloudinaryService } from '../../utils/cloudinary.service';
import { PhotoProfileService } from '../photo-profile.service';
import { PhotoProfile } from '../photo-profile.entity';
import { UserService } from '../../user/user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { User } from '../../user/user.entity';
import { PhotoProfileUtils } from '../photo-profile.utils';

@Resolver()
export class UploadProfileImageResolver {
  constructor(
    private cloudinaryService: CloudinaryService,
    private photoProfileService: PhotoProfileService,
    private userService: UserService,
    private photoProfileUtils: PhotoProfileUtils,
  ) {}

  @Mutation(() => PhotoProfile, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async uploadProfileImage(
    @CurrentUser() authPayload: AuthPayload,
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream }: FileUpload,
  ): Promise<PhotoProfile> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    await this.photoProfileUtils.setUserCurrentProfileToFalse(user);
    return new Promise((resolve, reject) => {
      const stream = this.cloudinaryService.cloudinary.uploader.upload_stream(
        {
          folder: 'ino-vaovao',
        },
        (error, result) =>
          this.onFinishStream(error, result, resolve, reject, user),
      );
      createReadStream().pipe(stream);
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onFinishStream(
    error: any,
    result: any,
    resolve: (value?: PhotoProfile | PromiseLike<PhotoProfile>) => void,
    reject: (reason?: any) => void,
    user: User,
  ): void {
    if (result) {
      const newPhotoProfile = new PhotoProfile();
      newPhotoProfile.current = true;
      newPhotoProfile.url = result.url;
      newPhotoProfile.publicId = result.public_id;
      newPhotoProfile.user = user;
      resolve(this.photoProfileService.createPhotoProfile(newPhotoProfile));
    } else {
      console.log(error);
      reject(null);
    }
  }
}
