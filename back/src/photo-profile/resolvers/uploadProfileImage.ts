import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

import { CloudinaryService } from '../../utils/cloudinary.service';
import { PhotoProfileService } from '../photo-profile.service';
import { PhotoProfile } from '../photo-profile.entity';
import { UserService } from '../../user/user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

@Resolver()
export class UploadProfileImageResolver {
  constructor(
    private cloudinaryService: CloudinaryService,
    private photoProfileService: PhotoProfileService,
    private userService: UserService,
  ) {}

  @Mutation(() => PhotoProfile, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async uploadProfileImage(
    @CurrentUser() authPayload: AuthPayload,
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream }: FileUpload,
  ): Promise<PhotoProfile> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    return new Promise((resolve, reject) => {
      const stream = this.cloudinaryService.cloudinary.uploader.upload_stream(
        {
          folder: 'ino-vaovao',
        },
        (error, result) => {
          if (result) {
            const newPhotoProfile = new PhotoProfile();
            newPhotoProfile.url = result.url;
            newPhotoProfile.publicId = result.public_id;
            newPhotoProfile.user = user;
            resolve(
              this.photoProfileService.createPhotoProfile(newPhotoProfile),
            );
          } else {
            console.log(error);
            reject(null);
          }
        },
      );
      createReadStream().pipe(stream);
    });
  }
}
