import { gql } from '@apollo/client';

export interface SetCurrentPhotoData {
  setCurrentPhoto: boolean;
}

export const SET_CURRENT_PHOTO = gql`
  mutation SetCurrentPhoto($publicId: String!) {
    setCurrentPhoto(publicId: $publicId)
  }
`;
