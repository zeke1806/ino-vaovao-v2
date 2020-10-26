import * as React from 'react';

import { RouteProp, useRoute } from '@react-navigation/core';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { DISCOVERY_CATEGORIES } from '../configs';
import DiscoveryDetailScreen from '../screens/DiscoveryDetailScreen';
import { DiscoveryNavigatorRouteProp } from './MainNavigator';
import RecipesScreen from '../screens/RecipesScreen';

type DiscoveryNavigatorParamList = {
  Recipes: {
    type: DISCOVERY_CATEGORIES;
  };
  DiscoveryDetail: {
    image: string;
    title: string;
    content: string;
  };
};

const Stack = createStackNavigator<DiscoveryNavigatorParamList>();

export type RecipesScreenProps = StackNavigationProp<
  DiscoveryNavigatorParamList,
  'Recipes'
>;

export type RecipesScreenRouteProp = RouteProp<
  DiscoveryNavigatorParamList,
  'Recipes'
>;

export type DiscoveryDetailScreenRouteProp = RouteProp<
  DiscoveryNavigatorParamList,
  'DiscoveryDetail'
>;

const DiscoveryNavigator: React.FC = () => {
  const {
    params: { type },
  } = useRoute<DiscoveryNavigatorRouteProp>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Recipes"
        component={RecipesScreen}
        initialParams={{ type }}
      />
      <Stack.Screen name="DiscoveryDetail" component={DiscoveryDetailScreen} />
    </Stack.Navigator>
  );
};

export default DiscoveryNavigator;
