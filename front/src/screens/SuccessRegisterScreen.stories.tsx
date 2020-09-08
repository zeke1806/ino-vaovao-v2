import MockedNavigator from '../utils/MockedNavigator';
import { ProviderWrapper } from '../App';
import React from 'react';
import SuccessRegisterScreen from './SuccessRegisterScreen';
import { storiesOf } from '@storybook/react-native';

storiesOf('SuccessRegisterScreen', module)
  .addDecorator((story) => {
    const Comp: React.FC<any> = () => (
      <ProviderWrapper>{story()}</ProviderWrapper>
    );
    return <MockedNavigator component={Comp} />;
  })
  .add('default', () => <SuccessRegisterScreen />);
