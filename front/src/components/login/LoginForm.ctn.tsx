import * as React from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';
import { useFormLogin } from '../../graphql/auth/login/useFormLogin';

const LoginFormCtn: React.FC = () => {
  const { loginInput, handleChangeLoginInput, formLoginError } = useFormLogin();

  const loginFormProps: LoginFormProps = {
    formInput: loginInput,
    onChange: handleChangeLoginInput,
    error: formLoginError,
  };

  console.log(loginInput);

  return <LoginForm {...loginFormProps} />;
};

export default LoginFormCtn;
