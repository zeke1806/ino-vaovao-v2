import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';

type ProfileNavigatorParamList = {
  Profile: undefined;
  Photo: undefined;
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export type ProfileScreenProps = StackNavigationProp<
  ProfileNavigatorParamList,
  'Profile'
>;

export type PhotoScreenProps = StackNavigationProp<
  ProfileNavigatorParamList,
  'Photo'
>;

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
