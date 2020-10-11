import * as React from 'react';
import CommonAvatar from './CommonAvatar';
import SearchBar from './SearchBar';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/core';

interface SearchBarHeaderProps {
  right?: React.FC<unknown>;
}

const SearchBarHeader: React.FC<SearchBarHeaderProps> = ({ right: Right }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <CommonAvatar
        size="medium"
        connected
        onPress={(): void => {
          navigation.navigate('ProfileNavigator');
        }}
      />
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <SearchBar />
      </View>
      {Right && <Right />}
    </View>
  );
};

export default SearchBarHeader;
