import { Repository } from 'typeorm';

import { PhotoProfileService } from './photo-profile.service';
import { PhotoProfile } from './photo-profile.entity';

describe('PhotoProfileService', () => {
  let service: PhotoProfileService;

  beforeEach(async () => {
    service = new PhotoProfileService({} as Repository<PhotoProfile>);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
