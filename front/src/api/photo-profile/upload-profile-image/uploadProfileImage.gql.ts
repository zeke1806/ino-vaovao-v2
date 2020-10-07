import { PHOTO_PROFILE } from '../../fragments';
import { PhotoProfile } from '../../types';
import { gql } from '@apollo/client';

export interface UploadProfileImageData {
  uploadProfileImage: PhotoProfile;
}

export const UPLOAD_PROFILE_IMAGE = gql`
  mutation UploadProfileImage($file: Upload!) {
    uploadProfileImage(file: $file) {
      ...ProfileImageFrag
    }
  }
  ${PHOTO_PROFILE}
`;
