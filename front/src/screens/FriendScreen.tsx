import * as React from 'react';

import List from '../components/friend/List';
import Search from '../components/friend/FriendSearch';
import { View } from 'native-base';

const FriendScreen: React.FC = () => {
  return (
    <View>
      <Search />
      <List />
    </View>
  );
};

export default FriendScreen;
