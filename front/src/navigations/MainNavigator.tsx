import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

type MainNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

export type ProfileScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'Profile'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
