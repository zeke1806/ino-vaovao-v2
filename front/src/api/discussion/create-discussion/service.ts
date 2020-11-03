import { CREATE_DISCUSSION, CreateDiscussionData } from './gql';

import { MessageScreenParams } from '../../../navigations/MessageNavigator';
import { MutationCreateDiscussionArgs } from '../../types';
import { USER_DISCUSSIONS } from '../user-discussions/gql';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

interface Return {
  submit: (variables: MutationCreateDiscussionArgs) => void;
  loading: boolean;
}

export const useCreateDiscussion = (): Return => {
  const { navigate } = useNavigation();
  const [create, { loading }] = useMutation<
    CreateDiscussionData,
    MutationCreateDiscussionArgs
  >(CREATE_DISCUSSION, {
    onCompleted({ createDiscussion }) {
      navigate('Message', {
        discussion: createDiscussion,
      } as MessageScreenParams);
    },
    refetchQueries: () => [
      {
        query: USER_DISCUSSIONS,
      },
    ],
  });

  const submit = (variables: MutationCreateDiscussionArgs): void => {
    create({ variables });
  };

  return {
    submit,
    loading,
  };
};
