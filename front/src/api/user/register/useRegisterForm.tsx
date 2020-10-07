import * as React from 'react';
import { MutationRegisterArgs } from '../../types';
import { useImmer } from 'use-immer';

export type Keys = 'username' | 'password' | 'validatePassword';
export type RegisterForm = {
  validatePassword: string;
  password: string;
  username: string;
};
export interface UseRegisterForm {
  handleChangeFormRegister: (key: Keys, value: string) => void;
  resetForm: () => void;
  registerForm: RegisterForm;
  errorFormRegister: boolean;
  isFormOk: () => boolean;
}

export const useRegisterForm = (): UseRegisterForm => {
  const [errorFormRegister, setError] = React.useState(false);
  const [validatePassword, setValidatePassword] = React.useState('');
  const [variables, setVariables] = useImmer<MutationRegisterArgs>({
    registerInput: {
      username: '',
      password: '',
    },
  });

  const handleChangeFormRegister = (key: Keys, value: string): void => {
    if (key === 'username' || key === 'password') {
      setVariables((draft) => {
        draft.registerInput[key] = value;
      });
    } else if (key === 'validatePassword') {
      setValidatePassword(value);
    }
  };

  const resetForm = (): void => {
    setError(false);
    setValidatePassword('');
    setVariables((draft) => {
      draft.registerInput.username = '';
      draft.registerInput.password = '';
    });
  };

  const isFormOk = (): boolean => {
    if (
      variables.registerInput.password === '' ||
      variables.registerInput.username === '' ||
      validatePassword === '' ||
      variables.registerInput.password !== validatePassword
    ) {
      // error
      setError(true);
      return false;
    } else {
      return true;
    }
  };

  const registerForm: RegisterForm = {
    ...variables.registerInput,
    validatePassword,
  };

  return {
    handleChangeFormRegister,
    resetForm,
    registerForm,
    errorFormRegister,
    isFormOk,
  };
};
