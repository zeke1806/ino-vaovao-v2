import React from 'react';
import RegisterScreen from '../screens/Register';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterScreen', module)
  .addDecorator((story) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {story()}
    </View>
  ))
  .add('default', () => <RegisterScreen text="default" />)
  .add('autre', () => <RegisterScreen text="autre text" />);
