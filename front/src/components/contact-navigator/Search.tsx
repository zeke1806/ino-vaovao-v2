import * as React from 'react';

import SearchBar from '../public/SearchBar';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

interface Prop {
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<Prop> = (prop) => {
  return (
    <View style={{ paddingHorizontal: globalStyles.space }}>
      <SearchBar {...prop} />
    </View>
  );
};

export default Search;
