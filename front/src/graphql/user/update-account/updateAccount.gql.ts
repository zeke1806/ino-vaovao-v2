import { USER_FRAG } from '../../fragments';
import { UpdateAccountResult } from '../../types';
import { gql } from '@apollo/client';

export interface UpdateAccountData {
  updateAccount: UpdateAccountResult;
}

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($updateAccountInput: UpdateAccountInput!) {
    updateAccount(updateAccountInput: $updateAccountInput) {
      __typename
      ... on User {
        ...UserFrag
      }
      ... on UpdateAccountError {
        usernameNotAvailable
        cannotUpdateTheSameInfo
      }
    }
  }

  ${USER_FRAG}
`;
