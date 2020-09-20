import { UploadProfileImageResolver } from './uploadProfileImage';
import { RemoveProfileImageResolver } from './removeProfileImage';

export const PhotoProfileResolvers = [
  UploadProfileImageResolver,
  RemoveProfileImageResolver,
];
