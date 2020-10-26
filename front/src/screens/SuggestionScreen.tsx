import * as React from 'react';

import List from '../components/suggestion/List';
import SuggSearch from '../components/suggestion/SuggSearch';
import { View } from 'native-base';

const SuggestionScreen: React.FC = () => {
  return (
    <View>
      <SuggSearch />
      <List />
    </View>
  );
};

export default SuggestionScreen;
