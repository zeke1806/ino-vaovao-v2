import { REMOVE_DISCUSSION, RemoveDiscussionData } from './gql';

import { MutationRemoveDiscussionArgs } from '../../types';
import { USER_DISCUSSIONS } from '../user-discussions/gql';
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
    refetchQueries: [
      {
        query: USER_DISCUSSIONS,
        variables: {
          clientId: me.id,
        },
      },
    ],
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
