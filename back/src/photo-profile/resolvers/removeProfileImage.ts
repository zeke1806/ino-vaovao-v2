import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PhotoProfileService } from '../photo-profile.service';

@Resolver()
export class RemoveProfileImageResolver {
  constructor(private photoProfileService: PhotoProfileService) {}

  @Mutation(() => Boolean)
  async removeProfileImage(
    @Args('idPhotoProfile') idPhotoProfile: number,
  ): Promise<boolean> {
    const photoProfile = await this.photoProfileService.getPhotoProfileById(
      idPhotoProfile,
    );
    const response = await this.photoProfileService.deletePhotoProfile(
      photoProfile,
    );
    return response && !response.id;
  }
}
