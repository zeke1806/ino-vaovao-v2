import { FRIEND_HISTORY_FRAG } from '../../fragments';
import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface AcceptFriendRequestData {
  acceptFriendRequest: FriendHistory;
}

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation AcceptFriendRequest($userId: Float!) {
    acceptFriendRequest(userId: $userId) {
      ...FriendHistoryFrag
    }
  }
  ${FRIEND_HISTORY_FRAG}
`;
