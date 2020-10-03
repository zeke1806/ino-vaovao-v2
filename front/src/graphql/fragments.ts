import { gql } from '@apollo/client';

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
