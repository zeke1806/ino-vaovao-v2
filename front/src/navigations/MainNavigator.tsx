import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

type MainNavigatorParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<MainNavigatorParamList>();

export type HomeScreenProps = StackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
