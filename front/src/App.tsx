import * as React from 'react';
import {
  useSessionDispatch,
  useSessionState,
} from './providers/session/session.consumer';
import { ApolloProvider } from '@apollo/client';
import { AppLoading } from 'expo';
import { ContextProvider } from './providers';
import RootNavigator from './navigations/RootStackNavigator';
import { client } from './graphql/apollo';
import { loadAssetsAsync } from './utils/loadAssetsAsync';
import { loadFontsAsync } from './utils/loadFontsAsync';

export const ProviderWrapper: React.FC = ({ children }) => {
  return (
    <ContextProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ContextProvider>
  );
};

function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const sessionState = useSessionState();
  const sessionDispatch = useSessionDispatch();

  React.useEffect(() => {
    const asyncLoadFont = async (): Promise<void> => {
      await loadFontsAsync();
      sessionDispatch({ type: 'SET_READY' });
    };
    asyncLoadFont();
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
