import * as React from 'react';

import MeAvatar from './MeAvatar';
import SearchBar from './SearchBar';
import { View } from 'native-base';

interface SearchBarHeaderProps {
  right?: React.FC<unknown>;
}

const SearchBarHeader: React.FC<SearchBarHeaderProps> = ({ right: Right }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <MeAvatar />
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <SearchBar />
      </View>
      {Right && <Right />}
    </View>
  );
};

export default SearchBarHeader;
