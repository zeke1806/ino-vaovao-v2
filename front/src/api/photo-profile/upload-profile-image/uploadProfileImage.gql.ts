import { PHOTO_PROFILE_FRAG } from '../../fragments';
import { PhotoProfile } from '../../types';
import { gql } from '@apollo/client';

export interface UploadProfileImageData {
  uploadProfileImage: PhotoProfile;
}

export const UPLOAD_PROFILE_IMAGE = gql`
  mutation UploadProfileImage($file: Upload!) {
    uploadProfileImage(file: $file) {
      ...PhotoProfileFrag
    }
  }
  ${PHOTO_PROFILE_FRAG}
`;
