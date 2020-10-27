import { gql } from '@apollo/client';

export interface CancelRequestData {
  cancelRequest: boolean;
}

export const CANCEL_REQUEST = gql`
  mutation CancelRequest($friendId: Float!) {
    cancelRequest(friendId: $friendId)
  }
`;
