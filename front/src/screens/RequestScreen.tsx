import * as React from 'react';

import List from '../components/request/List';
import Search from '../components/request/Search';
import { View } from 'native-base';

const RequestScreen: React.FC = () => {
  return (
    <View>
      <Search />
      <List />
    </View>
  );
};

export default RequestScreen;
