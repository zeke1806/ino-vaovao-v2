import { ProviderWrapper } from '../App';
import React from 'react';
import SuccessRegisterScreen from './SuccessRegisterScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('SuccessRegisterScreen', module)
  .addDecorator((story) => <ProviderWrapper>{story()}</ProviderWrapper>)
  .add('default', () => <SuccessRegisterScreen />);
