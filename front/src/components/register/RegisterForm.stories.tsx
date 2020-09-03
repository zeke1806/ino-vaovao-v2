import { ProviderWrapper } from '../../App';
import React from 'react';
import RegisterForm from './RegisterForm';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterForm', module)
  .addDecorator((story) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProviderWrapper>{story()}</ProviderWrapper>
    </View>
  ))
  .add('default', () => <RegisterForm />);
