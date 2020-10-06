import { gql } from '@apollo/client';

export const PHOTO_PROFILE = gql`
  fragment PhotoProfileFrag on PhotoProfile {
    publicId
    url
  }
`;

export const USER_FRAG = gql`
  fragment UserFrag on User {
    id
    username
    statusConnected
    currentPhoto {
      ...PhotoProfileFrag
    }
    photos {
      ...PhotoProfileFrag
    }
  }
  ${PHOTO_PROFILE}
`;

export const REGISTER_ERROR_FRAG = gql`
  fragment RegisterErrorFrag on RegisterError {
    fieldEmpty
    usernameNotAvailable
  }
`;
