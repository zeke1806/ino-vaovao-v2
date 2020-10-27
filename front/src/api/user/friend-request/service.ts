import { FRIEND_REQUESTS, FriendRequestsData } from './gql';

import { useQuery } from '@apollo/client';

interface Return {
  data: FriendRequestsData | undefined;
  loading: boolean;
}

export const useFriendRequests = (): Return => {
  const { data, loading } = useQuery<FriendRequestsData>(FRIEND_REQUESTS);
  return {
    data,
    loading,
  };
};
