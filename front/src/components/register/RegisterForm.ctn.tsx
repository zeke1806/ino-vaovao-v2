import * as React from 'react';
import RegisterForm, { RegisterFormProps } from './RegisterForm';
import { RegisterScreenProps } from '../../navigations/AuthenticationNavigator';
import { useNavigation } from '@react-navigation/core';
import { useRegister } from '../../graphql/user/register/register.service';

const RegisterFormCtn: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps>();
  const {
    registerForm,
    handleChangeFormRegister,
    submitRegister,
    errorFormRegister,
    loadingRegister,
  } = useRegister();

  const navigateToLogin = (): void => {
    navigation.navigate('Login');
  };

  const registerFormProps: RegisterFormProps = {
    formInput: registerForm,
    error: errorFormRegister,
    onChange: handleChangeFormRegister,
    onSubmit: submitRegister,
    loading: loadingRegister,
    navigateToLogin,
  };

  return <RegisterForm {...registerFormProps} />;
};

export default RegisterFormCtn;
