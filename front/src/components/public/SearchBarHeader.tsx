import * as React from 'react';

import MeAvatar from './MeAvatar';
import SearchBar from './SearchBar';
import { View } from 'native-base';

interface SearchBarHeaderProps {
  right?: React.FC<unknown>;
  value?: string;
  onChange?: (value: string) => void;
}

const SearchBarHeader: React.FC<SearchBarHeaderProps> = ({
  right: Right,
  value,
  onChange,
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <MeAvatar />
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <SearchBar value={value} onChange={onChange} />
      </View>
      {Right && <Right />}
    </View>
  );
};

export default SearchBarHeader;
