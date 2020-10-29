import { ApolloCache, useMutation } from '@apollo/client';
import { CANCEL_REQUEST, CancelRequestData } from './gql';
import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from '../../user/friend-suggestion/friendSuggestion.gql';

import { MutationCancelRequestArgs } from '../../types';
import produce from 'immer';

function updateFriendSuggestion(
  cache: ApolloCache<CancelRequestData>,
  friendId: number,
): void {
  const prev = cache.readQuery<FriendSuggestionData>({
    query: FRIEND_SUGGESTION,
  });
  if (prev) {
    cache.writeQuery<FriendSuggestionData>({
      query: FRIEND_SUGGESTION,
      data: produce(prev, (draft) => {
        draft.friendSuggestion.forEach((sugg) => {
          if (sugg.id === friendId) {
            sugg.requested = false;
          }
        });
      }),
    });
  }
}

interface Return {
  loading: boolean;
  submit: () => void;
}

export const useCancelRequest = (
  variables: MutationCancelRequestArgs,
): Return => {
  const [cancel, { loading }] = useMutation<
    CancelRequestData,
    MutationCancelRequestArgs
  >(CANCEL_REQUEST, {
    update(cache, { data }) {
      if (data && data.cancelRequest) {
        updateFriendSuggestion(cache, variables.friendId);
      }
    },
  });

  const submit = (): void => {
    cancel({ variables });
  };

  return {
    loading,
    submit,
  };
};
