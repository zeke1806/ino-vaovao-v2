import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RouteProp } from '@react-navigation/core';

type ProfileNavigatorParamList = {
  Profile: undefined;
  Photo: {
    photo: Record<string, unknown>;
  };
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export type ProfileScreenProps = StackNavigationProp<
  ProfileNavigatorParamList,
  'Profile'
>;

export type PhotoScreenNavigation = StackNavigationProp<
  ProfileNavigatorParamList,
  'Photo'
>;
export type PhotoScreenRoute = RouteProp<ProfileNavigatorParamList, 'Photo'>;
export interface PhotoScreenNavigationProps {
  navigation: PhotoScreenNavigation;
  route: PhotoScreenRoute;
}

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
