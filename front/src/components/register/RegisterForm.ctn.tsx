import * as React from 'react';
import RegisterForm, {
  RegisterFormInput,
  RegisterFormProps,
} from './RegisterForm';

const RegisterFormCtn: React.FC = () => {
  const [formInput, setFormInput] = React.useState<RegisterFormInput>({
    username: '',
    password: '',
    validatePassword: '',
  });

  const registerFormProps: RegisterFormProps = {
    formInput,
    error: false,
    onChange: (key, text) => {
      let a;
    },
    onSubmit: () => {
      let b;
    },
  };

  return <RegisterForm {...registerFormProps} />;
};

export default RegisterFormCtn;
