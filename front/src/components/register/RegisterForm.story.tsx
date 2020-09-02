import * as React from 'react';
import RegisterForm from './RegisterForm';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterForm', module)
  .addDecorator((story) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
      }}
    >
      {story()}
    </View>
  ))
  .add('default', () => <RegisterForm />);
