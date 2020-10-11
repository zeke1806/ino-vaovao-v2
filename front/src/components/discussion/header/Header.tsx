import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import Right from './Right';
import SearchBar from '../../public/SearchBar';
import { View } from 'native-base';

const Header: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <CommonAvatar size="medium" connected />
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <SearchBar />
      </View>
      <Right />
    </View>
  );
};

export default Header;
