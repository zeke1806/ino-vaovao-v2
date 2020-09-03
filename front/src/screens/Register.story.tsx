import { ProviderWrapper } from '../App';
import React from 'react';
import RegisterScreen from '../screens/Register';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterScreen', module)
  .addDecorator((story) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProviderWrapper>{story()}</ProviderWrapper>
    </View>
  ))
  .add('default', () => <RegisterScreen />)
  .add('autre', () => <RegisterScreen />);
