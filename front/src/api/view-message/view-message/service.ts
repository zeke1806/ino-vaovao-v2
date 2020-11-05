import { VIEW_MESSAGE, ViewMessageData } from './gql';

import { MutationViewMessageArgs } from '../../types';
import { USER_DISCUSSIONS } from '../../discussion/user-discussions/gql';
import { useMe } from '../../user/me/me.service';
import { useMutation } from '@apollo/client';

interface Return {
  submit: (variables: MutationViewMessageArgs) => void;
  loading: boolean;
}

export const useViewMessage = (): Return => {
  const { meData } = useMe();
  const me = meData!.me;

  const [view, { loading }] = useMutation<
    ViewMessageData,
    MutationViewMessageArgs
  >(VIEW_MESSAGE, {
    refetchQueries: [
      {
        query: USER_DISCUSSIONS,
        variables: {
          clientId: me.id,
        },
      },
    ],
  });

  const submit = (variables: MutationViewMessageArgs): void => {
    view({
      variables,
    });
  };

  return {
    submit,
    loading,
  };
};
