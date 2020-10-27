import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from './friendSuggestion.gql';

import { useQuery } from '@apollo/client';

interface Return {
  loading: boolean;
  data: FriendSuggestionData | undefined;
}

export const useFriendSuggestion = (): Return => {
  const { loading, data } = useQuery<FriendSuggestionData>(FRIEND_SUGGESTION);
  return {
    loading,
    data,
  };
};
