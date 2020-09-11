import * as React from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';
import { useLogin } from '../../graphql/auth/login/login.service';

const LoginFormCtn: React.FC = () => {
  const {
    loginInput,
    handleChangeLoginInput,
    formLoginError,
    loadingLogin,
    submitLogin,
  } = useLogin();

  const loginFormProps: LoginFormProps = {
    formInput: loginInput,
    onChange: handleChangeLoginInput,
    error: formLoginError,
    onSubmit: submitLogin,
    loading: loadingLogin,
  };

  return <LoginForm {...loginFormProps} />;
};

export default LoginFormCtn;
