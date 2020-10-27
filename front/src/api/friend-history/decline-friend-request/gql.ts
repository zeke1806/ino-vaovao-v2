import { gql } from '@apollo/client';

export interface DeclineFriendRequestData {
  declineFriendRequest: boolean;
}

export const DECLINE_FRIEND_REQUEST = gql`
  mutation DeclineFriendRequest($userId: Float!) {
    declineFriendRequest(userId: $userId)
  }
`;
