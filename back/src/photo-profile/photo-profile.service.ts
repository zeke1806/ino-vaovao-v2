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

  createPhotoProfile(photoProfile: PhotoProfile): Promise<PhotoProfile> {
    return this.photoProfileRepository.save(photoProfile);
  }
}
