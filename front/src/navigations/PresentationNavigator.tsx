import * as React from 'react';
import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {
  Presentation1Screen,
  Presentation2Screen,
  Presentation3Screen,
  Presentation4Screen,
} from '../screens/PresentationScreen';

export type PresentationNavigatorParamList = {
  Presentation1: undefined;
  Presentation2: undefined;
  Presentation3: undefined;
  Presentation4: undefined;
};

export type Presentation1ScreenProps = MaterialTopTabNavigationProp<
  PresentationNavigatorParamList,
  'Presentation1'
>;

export type Presentation2ScreenProps = MaterialTopTabNavigationProp<
  PresentationNavigatorParamList,
  'Presentation2'
>;

export type Presentation3ScreenProps = MaterialTopTabNavigationProp<
  PresentationNavigatorParamList,
  'Presentation3'
>;

export type Presentation4ScreenProps = MaterialTopTabNavigationProp<
  PresentationNavigatorParamList,
  'Presentation4'
>;

const Tab = createMaterialTopTabNavigator<PresentationNavigatorParamList>();

const PresentationNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      tabBarOptions={{
        style: { display: 'none' },
      }}
    >
      <Tab.Screen name="Presentation1" component={Presentation1Screen} />
      <Tab.Screen name="Presentation2" component={Presentation2Screen} />
      <Tab.Screen name="Presentation3" component={Presentation3Screen} />
      <Tab.Screen name="Presentation4" component={Presentation4Screen} />
    </Tab.Navigator>
  );
};

export default PresentationNavigator;
