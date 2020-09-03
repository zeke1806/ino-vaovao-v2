import * as React from 'react';
import { AppLoading } from 'expo';
import { ContextProvider } from './providers';
import RootNavigator from './navigations/RootStackNavigator';
import { loadAssetsAsync } from './utils/loadAssetsAsync';
import { loadFontsAsync } from './utils/loadFontsAsync';

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const asyncLoadFont = async (): Promise<void> => {
      await loadFontsAsync();
      setIsReady(true);
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

  if (!isReady) return <AppLoading />;

  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default ProviderWrapper;
