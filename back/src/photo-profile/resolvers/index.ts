import { UploadProfileImageResolver } from './uploadProfileImage';
import { RemoveProfileImageResolver } from './removeProfileImage';
import { SetCurrentPhotoResolver } from './setCurrentPhoto';

export const PhotoProfileResolvers = [
  UploadProfileImageResolver,
  RemoveProfileImageResolver,
  SetCurrentPhotoResolver,
];
