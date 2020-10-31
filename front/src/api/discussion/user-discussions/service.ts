import { USER_DISCUSSIONS, UserDiscussionsData } from './gql';

import { useQuery } from '@apollo/client';

interface Return {
  data: UserDiscussionsData | undefined;
  loading: boolean;
}

export const useUserDiscussions = (): Return => {
  const { data, loading } = useQuery<UserDiscussionsData>(USER_DISCUSSIONS);
  return {
    data,
    loading,
  };
};
