import * as React from 'react';
import {
  Presentation1Screen,
  Presentation2Screen,
  Presentation3Screen,
  Presentation4Screen,
} from '../screens/PresentationScreen';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

export type PresentationNavigatorParamList = {
  Presentation1: undefined;
  Presentation2: undefined;
  Presentation3: undefined;
  Presentation4: undefined;
};

export type Presentation1ScreenProps = StackNavigationProp<
  PresentationNavigatorParamList,
  'Presentation1'
>;

export type Presentation2ScreenProps = StackNavigationProp<
  PresentationNavigatorParamList,
  'Presentation2'
>;

export type Presentation3ScreenProps = StackNavigationProp<
  PresentationNavigatorParamList,
  'Presentation3'
>;

export type Presentation4ScreenProps = StackNavigationProp<
  PresentationNavigatorParamList,
  'Presentation4'
>;

const Stack = createStackNavigator<PresentationNavigatorParamList>();

const PresentationNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Presentation1" component={Presentation1Screen} />
      <Stack.Screen name="Presentation2" component={Presentation2Screen} />
      <Stack.Screen name="Presentation3" component={Presentation3Screen} />
      <Stack.Screen name="Presentation4" component={Presentation4Screen} />
    </Stack.Navigator>
  );
};

export default PresentationNavigator;
