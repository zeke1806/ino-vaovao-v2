import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PhotoProfile } from './photo-profile.entity';

@Injectable()
export class PhotoProfileService {
  constructor(
    @InjectRepository(PhotoProfile)
    private photoProfileRepository: Repository<PhotoProfile>,
  ) {}

  getPhotoProfileById(id: number): Promise<PhotoProfile> {
    return this.photoProfileRepository.findOne(id);
  }

  getPhotoProfileByPublicId(publicId: string): Promise<PhotoProfile> {
    return this.photoProfileRepository.findOne({
      where: {
        publicId,
      },
    });
  }

  createPhotoProfile(photoProfile: PhotoProfile): Promise<PhotoProfile> {
    return this.photoProfileRepository.save(photoProfile);
  }

  deletePhotoProfile(photoProfile: PhotoProfile): Promise<PhotoProfile> {
    return this.photoProfileRepository.remove(photoProfile);
  }
}
