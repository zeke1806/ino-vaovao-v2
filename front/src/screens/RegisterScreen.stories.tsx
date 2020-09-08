import MockedNavigator from '../utils/MockedNavigator';
import { ProviderWrapper } from '../App';
import React from 'react';
import RegisterScreen from './RegisterScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('RegisterScreen', module)
  .addDecorator((story) => {
    const Comp: React.FC = () => <ProviderWrapper>{story()}</ProviderWrapper>;
    return <MockedNavigator component={Comp} />;
  })
  .add('default', () => <RegisterScreen />);
