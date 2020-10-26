import * as React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import ContactNavigator from './ContactNavigator';
import { DISCOVERY_CATEGORIES } from '../configs';
import DiscoveryNavigator from './DiscoveryNavigator';
import HomeNavigator from './HomeNavigator';
import MessageNavigator from './MessageNavigator';
import ProfileNavigator from './ProfileNavigator';
import { RouteProp } from '@react-navigation/core';

type MainNavigatorParamList = {
  HomeNavigator: undefined;
  ProfileNavigator: undefined;
  ContactNavigator: undefined;
  MessageNavigator: undefined;
  DiscoveryNavigator: {
    type: DISCOVERY_CATEGORIES;
  };
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeNavigatorProps = StackNavigationProp<
  MainNavigatorParamList,
  'HomeNavigator'
>;

export type DiscoveryNavigatorRouteProp = RouteProp<
  MainNavigatorParamList,
  'DiscoveryNavigator'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="ContactNavigator" component={ContactNavigator} />
      <Stack.Screen name="MessageNavigator" component={MessageNavigator} />
      <Stack.Screen name="DiscoveryNavigator" component={DiscoveryNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
