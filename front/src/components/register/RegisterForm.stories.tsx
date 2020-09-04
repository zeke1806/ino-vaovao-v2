import RegisterForm, { RegisterFormProps } from './RegisterForm';
import { ProviderWrapper } from '../../App';
import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

export const withPasswordValid: RegisterFormProps = {
  formInput: {
    username: '',
    password: 'pass',
    validatePassword: 'pass',
  },
};

storiesOf('RegisterForm', module)
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
  .add('withPasswordValid', () => (
    <RegisterForm {...withPasswordValid} onSubmit={action('onSubmit')} />
  ));
