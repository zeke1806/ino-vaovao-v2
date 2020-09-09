import * as React from 'react';
import AuthenticationNavigator from './AuthenticationNavigator';
import MainNavigator from './MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PresentationNavigator from './PresentationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useSessionState } from '../providers/session/session.consumer';

type RootNavigatorParamList = {
  Presentation: undefined;
  Authentication: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

function RootNavigator(): React.ReactElement {
  const sessionState = useSessionState();

  return (
    <NavigationContainer>
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
