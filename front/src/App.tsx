import * as React from 'react';

import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {
  useSessionDispatch,
  useSessionState,
} from './providers/session/session.consumer';

import { ApolloProvider } from '@apollo/client';
import { AppLoading } from 'expo';
import { ContextProvider } from './providers';
import RootNavigator from './navigations/RootStackNavigator';
import { client } from './api/apollo';
import { handleBoot } from './utils/handleBoot';
import { loadAssetsAsync } from './utils/loadAssetsAsync';
import { useGlobalNotifier } from './api/notifier';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export const ProviderWrapper: React.FC = ({ children }) => {
  return (
    <ContextProvider>
      <ApolloProvider client={client}>
        <NavigationContainer theme={MyTheme}>{children}</NavigationContainer>
      </ApolloProvider>
    </ContextProvider>
  );
};

function App(): React.ReactElement {
  useGlobalNotifier();
  const [loading, setLoading] = React.useState(false);
  const sessionState = useSessionState();
  const sessionDispatch = useSessionDispatch();

  React.useEffect(() => {
    handleBoot(sessionDispatch);
  }, []);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={(): void => setLoading(true)}
        // onError={console.warn}
      />
    );
  }

  if (!sessionState.appReady) return <AppLoading />;

  return <RootNavigator />;
}

export default function AppProvided(): React.ReactElement {
  return (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  );
}
