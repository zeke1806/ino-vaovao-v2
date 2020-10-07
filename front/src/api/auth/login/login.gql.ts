import { LoginResult } from '../../types';
import { gql } from '@apollo/client';

export interface LoginData {
  login: LoginResult;
}

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      __typename
      ... on LoginError {
        incorrectInfo
      }
      ... on LoginToken {
        token
      }
    }
  }
`;
