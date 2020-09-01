import React, { useState } from 'react';
import { AppLoading } from 'expo';

import { ContextProvider } from './providers';
import RootNavigator from './navigations/RootStackNavigator';
import { loadAssetsAsync } from './utils/loadAssetsAsync';

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={(): void => setLoading(true)}
        // onError={console.warn}
      />
    );
  }

  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default ProviderWrapper;
