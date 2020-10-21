import * as React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { DISCOVERY_CATEGORIES } from '../configs';
import DiscoveryCategoryScreen from '../screens/DiscoveryCategoryScreen';
import HomeNavigator from './HomeNavigator';
import MessageScreen from '../screens/MessageScreen';
import NameGroupScreen from '../screens/NameGroupScreen';
import ProfileNavigator from './ProfileNavigator';
import { RouteProp } from '@react-navigation/core';
import SelectRecipientScreen from '../screens/SelectRecipientScreen';

type MainNavigatorParamList = {
  HomeNavigator: undefined;
  ProfileNavigator: undefined;
  SelectRecipient: undefined;
  NameGroupScreen: undefined;
  MessageScreen: undefined;
  DiscoveryCategory: {
    type: DISCOVERY_CATEGORIES;
  };
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'HomeNavigator'
>;

export type ProfileScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'ProfileNavigator'
>;

export type SelectRecipientScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'SelectRecipient'
>;

export type DiscoveryCategoryScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'DiscoveryCategory'
>;

export type DiscoveryCategoryRouteProp = RouteProp<
  MainNavigatorParamList,
  'DiscoveryCategory'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="SelectRecipient" component={SelectRecipientScreen} />
      <Stack.Screen name="NameGroupScreen" component={NameGroupScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen
        name="DiscoveryCategory"
        component={DiscoveryCategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
