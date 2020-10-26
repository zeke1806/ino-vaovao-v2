import * as React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import ContactNavigator from './ContactNavigator';
import { DISCOVERY_CATEGORIES } from '../configs';
import DiscoveryDetailScreen from '../screens/DiscoveryDetailScreen';
import HomeNavigator from './HomeNavigator';
import MessageNavigator from './MessageNavigator';
import ProfileNavigator from './ProfileNavigator';
import RecipesScreen from '../screens/RecipesScreen';
import { RouteProp } from '@react-navigation/core';

type MainNavigatorParamList = {
  HomeNavigator: undefined;
  ProfileNavigator: undefined;
  ContactNavigator: undefined;
  MessageNavigator: undefined;
  RecipesScreen: {
    type: DISCOVERY_CATEGORIES;
  };
  DiscoveryDetail: {
    image: string;
    title: string;
    content: string;
  };
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeNavigatorProps = StackNavigationProp<
  MainNavigatorParamList,
  'HomeNavigator'
>;

export type RecipesScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'RecipesScreen'
>;

export type RecipesScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'RecipesScreen'
>;

export type DiscoveryDetailScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'DiscoveryDetail'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="ContactNavigator" component={ContactNavigator} />
      <Stack.Screen name="MessageNavigator" component={MessageNavigator} />
      <Stack.Screen name="RecipesScreen" component={RecipesScreen} />
      <Stack.Screen name="DiscoveryDetail" component={DiscoveryDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
