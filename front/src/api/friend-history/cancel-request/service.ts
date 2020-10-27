import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import { CANCEL_REQUEST, CancelRequestData } from './gql';
import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from '../../user/friend-suggestion/friendSuggestion.gql';

import { MutationCancelRequestArgs } from '../../types';
import produce from 'immer';

function updateFriendSuggestion(
  apollo: ApolloClient<Record<string, any>>,
  friendId: number,
): void {
  const prev = apollo.cache.readQuery<FriendSuggestionData>({
    query: FRIEND_SUGGESTION,
  });
  if (prev) {
    apollo.cache.writeQuery<FriendSuggestionData>({
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
  const apollo = useApolloClient() as ApolloClient<Record<string, any>>;
  const [cancel, { loading }] = useMutation<
    CancelRequestData,
    MutationCancelRequestArgs
  >(CANCEL_REQUEST, {
    onCompleted({ cancelRequest }) {
      if (cancelRequest) {
        updateFriendSuggestion(apollo, variables.friendId);
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
