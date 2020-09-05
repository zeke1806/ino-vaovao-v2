import * as React from 'react';
import { REGISTER, RegisterData } from './register.gql';
import { MutationRegisterArgs } from '../../types';
import { useImmer } from 'use-immer';
import { useMutation } from '@apollo/client';

type Keys = 'username' | 'password' | 'validatePassword';
type RegisterForm = {
  validatePassword: string;
  password: string;
  username: string;
};

export const useRegister = (): {
  registerForm: RegisterForm;
  submitRegister: () => void;
  loadingRegister: boolean;
  errorFormRegister: boolean;
  handleChangeFormRegister: (key: Keys, value: string) => void;
} => {
  const [errorFormRegister, setError] = React.useState(false);
  const [validatePassword, setValidatePassword] = React.useState('');
  const [variables, setVariables] = useImmer<MutationRegisterArgs>({
    registerInput: {
      username: '',
      password: '',
    },
  });
  const [register, { loading: loadingRegister }] = useMutation<
    RegisterData,
    MutationRegisterArgs
  >(REGISTER, {
    onCompleted: ({ register }) => {
      setError(false);
      setValidatePassword('');
      setVariables((draft) => {
        draft.registerInput.username = '';
        draft.registerInput.password = '';
      });
    },
  });

  const submitRegister = (): void => {
    if (
      variables.registerInput.password === '' ||
      variables.registerInput.username === '' ||
      validatePassword === '' ||
      variables.registerInput.password !== validatePassword
    ) {
      // error
      setError(true);
    } else {
      // submit
      register({ variables });
    }
  };

  const handleChangeFormRegister = (key: Keys, value: string): void => {
    if (key === 'username' || key === 'password') {
      setVariables((draft) => {
        draft.registerInput[key] = value;
      });
    } else if (key === 'validatePassword') {
      setValidatePassword(value);
    }
  };

  const registerForm: RegisterForm = {
    ...variables.registerInput,
    validatePassword,
  };

  return {
    registerForm,
    submitRegister,
    loadingRegister,
    errorFormRegister,
    handleChangeFormRegister,
  };
};
