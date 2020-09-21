import { UploadProfileImageResolver } from './uploadProfileImage';
import { CloudinaryService } from '../../utils/cloudinary.service';
import { PhotoProfileService } from '../photo-profile.service';
import { UserService } from '../../user/user.service';
import { PhotoProfile } from '../photo-profile.entity';
import { User } from '../../user/user.entity';

describe('UploadProfileImageResolver', () => {
  let resolver: UploadProfileImageResolver;
  let cloudinaryService: CloudinaryService;
  let photoProfileService: PhotoProfileService;
  let userService: UserService;

  beforeEach(() => {
    cloudinaryService = (jest.fn() as unknown) as CloudinaryService;
    photoProfileService = ({
      createPhotoProfile: jest.fn().mockResolvedValue(new PhotoProfile()),
    } as unknown) as PhotoProfileService;
    userService = (jest.fn() as unknown) as UserService;
    resolver = new UploadProfileImageResolver(
      cloudinaryService,
      photoProfileService,
      userService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('onFinishStream', () => {
    const resultFalse = false;
    const resultTrue = {
      url: '',
      public_id: '',
    };
    const error = 'error';
    const resolve = jest.fn();
    const reject = jest.fn();
    const user = new User();

    it('should return null', () => {
      resolver.onFinishStream(error, resultFalse, resolve, reject, user);
      expect(reject).toHaveBeenCalledWith(null);
    });

    it('should return new photo profile', () => {
      resolver.onFinishStream(error, resultTrue, resolve, reject, user);
      expect(resolve).toHaveBeenCalled();
      expect(photoProfileService.createPhotoProfile).toHaveBeenCalled();
    });
  });
});
