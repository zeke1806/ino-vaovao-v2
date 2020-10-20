import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PhotoProfileService } from '../photo-profile.service';
import { CloudinaryService } from '../../utils/cloudinary.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import {
  RemoveProfileImageResult,
  RemoveProfileImageError,
  RemoveProfileImageOk,
} from '../photo-profile.types';

@Resolver()
export class RemoveProfileImageResolver {
  constructor(
    private photoProfileService: PhotoProfileService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Mutation(() => RemoveProfileImageResult)
  @UseGuards(GqlAuthGuard)
  async removeProfileImage(
    @Args('photoProfilePublicId') publicId: string,
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<typeof RemoveProfileImageResult> {
    const photoProfile = await this.photoProfileService.getPhotoProfileByPublicId(
      publicId,
    );

    if (photoProfile.idUser !== authPayload.payload.id) {
      const error = new RemoveProfileImageError();
      error.notUserPhoto = 'Cannot delete image not owned';
      return error;
    }

    const dbPhotoRemoved = await this.photoProfileService.deletePhotoProfile(
      photoProfile,
    );
    const cloudinaryResponse = await this.cloudinaryService.cloudinary.uploader.destroy(
      publicId,
    );

    const resultOk = new RemoveProfileImageOk();
    resultOk.status =
      dbPhotoRemoved &&
      !dbPhotoRemoved.id &&
      cloudinaryResponse.result === 'ok';
    return resultOk;
  }
}
