import { FileUpload } from 'graphql-upload';

import { UploadProfileImageResolver } from './uploadProfileImage';
import { CloudinaryService } from '../../utils/cloudinary.service';
import { PhotoProfileService } from '../photo-profile.service';
import { UserService } from '../../user/user.service';
import { PhotoProfile } from '../photo-profile.entity';
import { AuthPayload } from '../../auth/auth.model';

describe('UploadProfileImageResolver', () => {
  let resolver: UploadProfileImageResolver;
  let cloudinaryService: CloudinaryService;
  let photoProfileService: PhotoProfileService;
  let userService: UserService;

  beforeEach(() => {
    cloudinaryService = (jest.fn() as unknown) as CloudinaryService;
    photoProfileService = (jest.fn() as unknown) as PhotoProfileService;
    userService = (jest.fn() as unknown) as UserService;
    resolver = new UploadProfileImageResolver(
      cloudinaryService,
      photoProfileService,
      userService,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return new photo profile', async () => {
    const expectedResult = new PhotoProfile();
    userService.getUserById = jest.fn();
    jest
      .spyOn(resolver, 'uploadProfileImage')
      .mockResolvedValue(expectedResult);
    const result = await resolver.uploadProfileImage(
      {
        payload: {
          id: 0,
        },
      } as AuthPayload,
      {} as FileUpload,
    );
    expect(result).toBeInstanceOf(PhotoProfile);
  });
});
