import * as React from 'react';
import RegisterForm, { RegisterFormProps } from './RegisterForm';
import { useRegister } from '../../graphql/user/register/register.service';

const RegisterFormCtn: React.FC = () => {
  const {
    registerForm,
    handleChangeFormRegister,
    submitRegister,
    errorFormRegister,
    loadingRegister,
  } = useRegister();

  const registerFormProps: RegisterFormProps = {
    formInput: registerForm,
    error: errorFormRegister,
    onChange: handleChangeFormRegister,
    onSubmit: submitRegister,
    loading: loadingRegister,
  };

  return <RegisterForm {...registerFormProps} />;
};

export default RegisterFormCtn;
