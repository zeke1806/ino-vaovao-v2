import { MESSAGES, MessagesData } from './gql';

import { QueryMessagesArgs } from '../../types';
import { useQuery } from '@apollo/client';

interface Return {
  data: MessagesData | undefined;
  loading: boolean;
}

export const useMessages = (variables: QueryMessagesArgs): Return => {
  const { data, loading } = useQuery<MessagesData, QueryMessagesArgs>(
    MESSAGES,
    {
      fetchPolicy: 'cache-and-network',
      variables,
    },
  );

  return {
    data,
    loading,
  };
};
