import { REGISTER_ERROR_FRAG, USER_FRAG } from '../../fragments';
import { RegisterResult } from '../../types';
import { gql } from '@apollo/client';

export interface RegisterData {
  register: RegisterResult;
}

export const REGISTER = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      __typename
      ... on User {
        ...UserFrag
      }

      ... on RegisterError {
        ...RegisterErrorFrag
      }
    }
  }
  ${USER_FRAG}
  ${REGISTER_ERROR_FRAG}
`;
