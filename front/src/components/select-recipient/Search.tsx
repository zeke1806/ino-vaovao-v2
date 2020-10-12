import * as React from 'react';
import SearchBar from '../public/SearchBar';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

const Search: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: globalStyles.space * 3 }}>
      <SearchBar />
    </View>
  );
};

export default Search;
