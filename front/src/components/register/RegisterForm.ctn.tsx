import * as React from 'react';
import RegisterForm, { RegisterFormProps } from './RegisterForm';
import { useRegister } from '../../graphql/user/register/register.service';

const RegisterFormCtn: React.FC = () => {
  const {
    registerForm,
    handleChangeFormRegister,
    submitRegister,
    errorFormRegister,
  } = useRegister();

  const registerFormProps: RegisterFormProps = {
    formInput: registerForm,
    error: errorFormRegister,
    onChange: handleChangeFormRegister,
    onSubmit: submitRegister,
  };

  return <RegisterForm {...registerFormProps} />;
};

export default RegisterFormCtn;
