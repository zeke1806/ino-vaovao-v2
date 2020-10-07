import { gql } from '@apollo/client';

export const PHOTO_PROFILE_FRAG = gql`
  fragment PhotoProfileFrag on PhotoProfile {
    id
    publicId
    url
  }
`;

export const USER_FRAG = gql`
  fragment UserFrag on User {
    id
    username
    statusConnected
  }
`;

export const REGISTER_ERROR_FRAG = gql`
  fragment RegisterErrorFrag on RegisterError {
    fieldEmpty
    usernameNotAvailable
  }
`;
