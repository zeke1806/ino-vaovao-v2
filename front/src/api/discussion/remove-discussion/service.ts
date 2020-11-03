import { REMOVE_DISCUSSION, RemoveDiscussionData } from './gql';

import { MutationRemoveDiscussionArgs } from '../../types';
import { USER_DISCUSSIONS } from '../user-discussions/gql';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

interface Return {
  submit: () => void;
  loading: boolean;
}

export const useRemoveDiscussion = (
  variables: MutationRemoveDiscussionArgs,
): Return => {
  const navigation = useNavigation();
  const [remove, { loading }] = useMutation<
    RemoveDiscussionData,
    MutationRemoveDiscussionArgs
  >(REMOVE_DISCUSSION, {
    onCompleted() {
      navigation.goBack();
    },
    refetchQueries: [
      {
        query: USER_DISCUSSIONS,
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
