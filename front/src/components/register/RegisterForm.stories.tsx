import RegisterForm, { RegisterFormProps } from './RegisterForm';
import { object, withKnobs } from '@storybook/addon-knobs';
import { ProviderWrapper } from '../../App';
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

export const withPasswordValid: Partial<RegisterFormProps> = {
  formInput: {
    username: '',
    password: 'pass',
    validatePassword: 'pass',
  },
};

export const withFieldError: Partial<RegisterFormProps> = {
  error: true,
  formInput: {
    username: '',
    password: '',
    validatePassword: '',
  },
};

storiesOf('RegisterForm', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
      }}
    >
      <ProviderWrapper>{story()}</ProviderWrapper>
    </View>
  ))
  .add('default', () => <RegisterForm />)
  .add('withPasswordValid', () => <RegisterForm {...withPasswordValid} />)
  .add('withFieldError', () => <RegisterForm {...withFieldError} />)
  .add('withLoading', () => <RegisterForm loading={object('loading', true)} />);
