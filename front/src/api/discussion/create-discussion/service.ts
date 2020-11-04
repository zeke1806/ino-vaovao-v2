import {
  CREATE_DISCUSSION,
  CreateDiscussionData,
  CreateDiscussionVars,
} from './gql';

import { MessageScreenParams } from '../../../navigations/MessageNavigator';
import { USER_DISCUSSIONS } from '../user-discussions/gql';
import { useMe } from '../../user/me/me.service';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

interface Return {
  submit: (variables: CreateDiscussionVars) => void;
  loading: boolean;
}

export const useCreateDiscussion = (): Return => {
  const { meData } = useMe();
  const me = meData!.me;
  const { navigate } = useNavigation();
  const [create, { loading }] = useMutation<
    CreateDiscussionData,
    CreateDiscussionVars
  >(CREATE_DISCUSSION, {
    onCompleted({ createDiscussion }) {
      navigate('Message', {
        discussion: createDiscussion,
      } as MessageScreenParams);
    },
    refetchQueries: () => [
      {
        query: USER_DISCUSSIONS,
        variables: {
          clientId: me.id,
        },
      },
    ],
  });

  const submit = (variables: CreateDiscussionVars): void => {
    create({ variables });
  };

  return {
    submit,
    loading,
  };
};
