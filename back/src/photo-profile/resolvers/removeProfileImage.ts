import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PhotoProfileService } from '../photo-profile.service';
import { CloudinaryService } from '../../utils/cloudinary.service';
import { UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

@Resolver()
export class RemoveProfileImageResolver {
  constructor(
    private photoProfileService: PhotoProfileService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeProfileImage(
    @Args('photoProfilePublicId') publicId: string,
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<boolean> {
    const photoProfile = await this.photoProfileService.getPhotoProfileByPublicId(
      publicId,
    );

    if (photoProfile.idUser !== authPayload.payload.id)
      throw new HttpException('CannotDeletePhoto', HttpStatus.UNAUTHORIZED);

    const dbPhotoRemoved = await this.photoProfileService.deletePhotoProfile(
      photoProfile,
    );
    const cloudinaryResponse = await this.cloudinaryService.cloudinary.uploader.destroy(
      publicId,
    );
    return (
      dbPhotoRemoved && !dbPhotoRemoved.id && cloudinaryResponse.result === 'ok'
    );
  }
}
