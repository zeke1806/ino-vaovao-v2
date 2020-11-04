import * as React from 'react';

import { USER_DISCUSSIONS, UserDiscussionsData } from './gql';

import { DiscussionLastMessageArgs } from '../../types';
import { useLazyQuery } from '@apollo/client';
import { useMe } from '../../user/me/me.service';

interface Return {
  data: UserDiscussionsData | undefined;
  loading: boolean;
}

export const useUserDiscussions = (): Return => {
  const { meData } = useMe();
  const [getUserDiscussions, { data, loading }] = useLazyQuery<
    UserDiscussionsData,
    DiscussionLastMessageArgs
  >(USER_DISCUSSIONS, {
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    if (meData) {
      getUserDiscussions({
        variables: {
          clientId: meData.me.id,
        },
      });
    }
  }, [meData]);

  return {
    data,
    loading,
  };
};
