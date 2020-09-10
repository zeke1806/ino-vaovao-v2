import * as React from 'react';
import { LoginInput } from '../../types';
import { useImmer } from 'use-immer';

interface UseFormLogin {
  loginInput: LoginInput;
  formLoginError: boolean;
  handleChangeLoginInput: (key: keyof LoginInput, value: string) => void;
  resetFormLogin: () => void;
  isFormLoginValid: () => boolean;
  _setFormLoginError: (value: boolean) => void;
}

export const useFormLogin = (): UseFormLogin => {
  const [formLoginError, setFormLoginError] = React.useState(false);
  const [loginInput, setLoginInput] = useImmer<LoginInput>({
    username: '',
    password: '',
  });

  const handleChangeLoginInput = (
    key: keyof LoginInput,
    value: string,
  ): void => {
    setLoginInput((draft) => {
      draft[key] = value;
    });
  };

  const resetFormLogin = (): void => {
    setLoginInput((draft) => {
      draft.password = '';
      draft.username = '';
    });
  };

  const isFormLoginValid = (): boolean => {
    return !!(loginInput.password && loginInput.username);
  };

  const _setFormLoginError = (value: boolean): void => {
    setFormLoginError(value);
  };

  return {
    loginInput,
    formLoginError,
    handleChangeLoginInput,
    resetFormLogin,
    isFormLoginValid,
    _setFormLoginError,
  };
};
