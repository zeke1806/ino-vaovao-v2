import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { PhotoProfile } from '../api/types';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RouteProp } from '@react-navigation/core';

type ProfileNavigatorParamList = {
  Profile: undefined;
  Photo: {
    photo: PhotoProfile;
  };
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export type ProfileScreenProps = StackNavigationProp<
  ProfileNavigatorParamList,
  'Profile'
>;

export interface PhotoScreenNavigationProps {
  navigation: StackNavigationProp<ProfileNavigatorParamList, 'Photo'>;
  route: RouteProp<ProfileNavigatorParamList, 'Photo'>;
}

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
