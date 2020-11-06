import { REMOVE_DISCUSSION, RemoveDiscussionData } from './gql';
import {
  USER_DISCUSSIONS,
  UserDiscussionVars,
  UserDiscussionsData,
} from '../user-discussions/gql';

import { MutationRemoveDiscussionArgs } from '../../types';
import produce from 'immer';
import { useMe } from '../../user/me/me.service';
import { useMutation } from '@apollo/client';

interface Return {
  submit: () => void;
  loading: boolean;
}

export const useRemoveDiscussion = (
  variables: MutationRemoveDiscussionArgs,
): Return => {
  const { meData } = useMe();
  const me = meData!.me;
  const [remove, { loading }] = useMutation<
    RemoveDiscussionData,
    MutationRemoveDiscussionArgs
  >(REMOVE_DISCUSSION, {
    update(cache) {
      const userDiscussionsData = cache.readQuery<
        UserDiscussionsData,
        UserDiscussionVars
      >({ query: USER_DISCUSSIONS, variables: { clientId: me.id } });
      if (userDiscussionsData) {
        cache.writeQuery<UserDiscussionsData, UserDiscussionVars>({
          query: USER_DISCUSSIONS,
          variables: { clientId: me.id },
          data: produce(userDiscussionsData, (draft) => {
            draft.userDiscussions.splice(
              draft.userDiscussions.findIndex(
                (elt) => elt.id === variables.discussionId,
              ),
              1,
            );
          }),
        });
      }
    },
  });

  const submit = (): void => {
    remove({
      variables,
    });
  };

  return {
    submit,
    loading,
  };
};
