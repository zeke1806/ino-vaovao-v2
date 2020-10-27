import { FRIENDS, FriendsData } from './gql';

import { useQuery } from '@apollo/client';

interface Return {
  data: FriendsData | undefined;
  loading: boolean;
}

export const useFriends = (): Return => {
  const { data, loading } = useQuery<FriendsData>(FRIENDS);
  return {
    data,
    loading,
  };
};
