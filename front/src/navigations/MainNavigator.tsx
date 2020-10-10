import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileNavigator from './ProfileNavigator';

type MainNavigatorParamList = {
  Home: undefined;
  ProfileNavigator: undefined;
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

export type ProfileScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'ProfileNavigator'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
