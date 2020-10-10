import { RemoveProfileImageResult } from '../../types';
import { gql } from '@apollo/client';

export interface RemoveProfileImageData {
  removeProfileImage: RemoveProfileImageResult;
}

export const REMOVE_PROFILE_IMAGE = gql`
  mutation RemoveProfileImage($photoProfilePublicId: String!) {
    removeProfileImage(photoProfilePublicId: $photoProfilePublicId) {
      __typename
    }
  }
`;
