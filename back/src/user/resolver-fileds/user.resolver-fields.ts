import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { User } from '../user.entity';
import { PhotoProfileService } from '../../photo-profile/photo-profile.service';
import { PhotoProfile } from '../../photo-profile/photo-profile.entity';

@Resolver(() => User)
export class UserResolverFields {
  constructor(private photoProfileService: PhotoProfileService) {}

  @ResolveField(() => PhotoProfile)
  async currentPhoto(@Root() user: User): Promise<PhotoProfile> {
    const photos = await this.photoProfileService.getUserPhotoProfiles(user);
    return photos.find((photo) => photo.current) || null;
  }

  @ResolveField(() => [PhotoProfile])
  async photos(@Root() user: User): Promise<PhotoProfile[]> {
    return this.photoProfileService.getUserPhotoProfiles(user);
  }
}
