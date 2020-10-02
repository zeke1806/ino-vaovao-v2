import * as React from 'react';
import { FIRST_BOOT, TOKEN } from '../../../configs';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'native-base';
import { globalStyles } from '../../../styles/global';
import { useApolloClient } from '@apollo/client';
import { useSessionDispatch } from '../../../providers/session/session.consumer';

const Logout: React.FC = () => {
  const sessionDispatch = useSessionDispatch();
  const apolloClient = useApolloClient();

  const handleClick = (): void => {
    apolloClient.resetStore();
    AsyncStorage.removeItem(TOKEN);
    AsyncStorage.removeItem(FIRST_BOOT);
    sessionDispatch({ type: 'DISCONNECT' });
  };

  return (
    <Button transparent onPress={handleClick}>
      <AntDesign
        name="logout"
        size={globalStyles.iconSize}
        color={globalStyles.colors.primary}
      />
    </Button>
  );
};

export default Logout;
