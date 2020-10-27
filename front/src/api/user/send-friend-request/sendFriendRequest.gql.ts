import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface SendFriendRequestData {
  sendFriendRequest: FriendHistory;
}

export const SEND_FRIEND_REQUEST = gql`
  mutation SendFriendRequest($friendId: Float!) {
    sendFriendRequest(friendId: $friendId) {
      user {
        id
      }
      friend {
        id
      }
      accepted
    }
  }
`;
