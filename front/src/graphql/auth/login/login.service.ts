import { LOGIN, LoginData } from './login.gql';
import { UseFormLogin, useFormLogin } from './useFormLogin';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MutationLoginArgs } from '../../types';
import { SessionDispatch } from '../../../providers/session/session.context';
import { TOKEN } from '../../../configs';
import { useMutation } from '@apollo/client';
import { useSessionDispatch } from '../../../providers/session/session.consumer';

export async function handleOnCompletedLogin(
  data: LoginData,
  sessionDispatch: SessionDispatch,
  resetForm: () => void,
): Promise<void> {
  if (data.login.__typename === 'LoginToken') {
    await AsyncStorage.setItem(TOKEN, data.login.token);
    sessionDispatch({ type: 'CONNECT' });
    resetForm();
  }
  if (data.login.__typename === 'LoginError') {
    Alert.alert(
      'Erreur',
      data.login.incorrectInfo,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }
}

type UseLogin = UseFormLogin & {
  submitLogin: () => void;
  loadingLogin: boolean;
};

export const useLogin = (
  _handleOnCompletedLogin = handleOnCompletedLogin,
): UseLogin => {
  const form = useFormLogin();
  const sessionDispatch = useSessionDispatch();

  const [login, { loading: loadingLogin }] = useMutation<
    LoginData,
    MutationLoginArgs
  >(LOGIN, {
    onCompleted: (data) =>
      _handleOnCompletedLogin(data, sessionDispatch, form.resetFormLogin),
  });

  const submitLogin = (): void => {
    if (form.isFormLoginValid()) {
      login({
        variables: {
          loginInput: form.loginInput,
        },
      });
    } else {
      form._setFormLoginError(true);
    }
  };

  return {
    ...form,
    submitLogin,
    loadingLogin,
  };
};
