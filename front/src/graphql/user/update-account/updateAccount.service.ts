import { UPDATE_ACCOUNT, UpdateAccountData } from './updateAccount.gql';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MutationUpdateAccountArgs } from '../../types';
import { TOKEN } from '../../../configs';
import { useImmer } from 'use-immer';
import { useMutation } from '@apollo/client';
import { useSessionDispatch } from '../../../providers/session/session.consumer';

export interface UseUpdateAccount {
  state: {
    name: string;
    password: string;
    statusConnected: boolean;
    modal: boolean;
  };
  handleChange: (
    key: 'password' | 'statusConnected' | 'name',
    value: string | boolean,
  ) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  loading: boolean;
  handleSubmit: () => void;
}

export const useUpdateAccount = (
  name: string,
  password: string,
  statusConnected: boolean,
): UseUpdateAccount => {
  const sessionDispatch = useSessionDispatch();
  const [state, setState] = useImmer({
    name,
    password,
    statusConnected,
    modal: false,
  });
  const [updateAccount, { loading }] = useMutation<
    UpdateAccountData,
    MutationUpdateAccountArgs
  >(UPDATE_ACCOUNT, {
    onCompleted: (data) => {
      console.log(data);
      let message = '';
      let messageType = '';
      if (data.updateAccount.__typename === 'UpdateAccountError') {
        messageType = 'Erreur';
        message =
          data.updateAccount.usernameNotAvailable! ||
          data.updateAccount.cannotUpdateTheSameInfo!;
      }
      if (data.updateAccount.__typename === 'User') {
        messageType = 'Succes';
        message = 'Votre compte a bien ete modifier';
        AsyncStorage.removeItem(TOKEN);

        sessionDispatch({ type: 'DISCONNECT' });
        setState((draft) => {
          draft.modal = false;
        });
      }

      Alert.alert(
        messageType,
        message,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    },
  });

  const handleOpenModal = (): void =>
    setState((draft) => {
      draft.modal = true;
    });

  const handleCloseModal = (): void =>
    setState((draft) => {
      draft.modal = false;
    });

  const handleChange = (
    key: 'password' | 'statusConnected' | 'name',
    value: string | boolean,
  ): void => {
    if ((key === 'name' || key === 'password') && typeof value === 'string') {
      setState((draft) => {
        draft[key] = value;
      });
    } else if (key === 'statusConnected' && typeof value === 'boolean') {
      setState((draft) => {
        draft[key] = value;
      });
    }
  };

  const handleSubmit = (): void => {
    const { name, password, statusConnected } = state;
    if (name !== '' && password !== '') {
      const variables: MutationUpdateAccountArgs = {
        updateAccountInput: {
          username: name,
          password: password,
          statusConnected: statusConnected,
        },
      };
      updateAccount({ variables });
    }
  };

  return {
    state,
    handleChange,
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    loading,
  };
};
