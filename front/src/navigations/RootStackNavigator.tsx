import * as React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import AuthenticationNavigator from './AuthenticationNavigator';
import MainNavigator from './MainNavigator';
import PresentationNavigator from './PresentationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useSessionState } from '../providers/session/session.consumer';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

type RootNavigatorParamList = {
  Presentation: undefined;
  Authentication: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

function RootNavigator(): React.ReactElement {
  const sessionState = useSessionState();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {sessionState.firstUsage && (
          <Stack.Screen name="Presentation" component={PresentationNavigator} />
        )}

        {sessionState.connected ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
