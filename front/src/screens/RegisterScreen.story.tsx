import { ProviderWrapper } from '../App';
import React from 'react';
import RegisterScreen from './RegisterScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterScreen', module)
  .addDecorator((story) => <ProviderWrapper>{story()}</ProviderWrapper>)
  .add('default', () => <RegisterScreen />);
