import { Injectable } from '@nestjs/common';
import { PhotoProfileService } from './photo-profile.service';
import { User } from '../user/user.entity';

@Injectable()
export class PhotoProfileUtils {
  constructor(private photoProfileService: PhotoProfileService) {}

  async setUserCurrentProfileToFalse(user: User): Promise<void> {
    const photos = await this.photoProfileService.getUserPhotoProfiles(user);
    await Promise.all(
      photos.map(async (photo) => {
        if (photo.current) photo.current = false;
        return this.photoProfileService.createPhotoProfile(photo);
      }),
    );
  }
}
