import { gql } from '@apollo/client';
import { USER_FRAG } from './fragments';
import { User } from './types';

export interface RegisterData {
  register: User;
}
export const REGISTER = gql`
mutation Register($input: RegisterInput!) {
  register(input: $input) {
    ...UserFrag
  }
}
${USER_FRAG}
`;

export interface LoginData {
  login: {
    token: string
  }
}
export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
     token
  }
}
`;
