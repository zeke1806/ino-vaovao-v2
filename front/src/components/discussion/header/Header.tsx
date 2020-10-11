import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import Right from './Right';
import SearchBar from '../../public/SearchBar';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
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
      <Right />
    </View>
  );
};

export default Header;
