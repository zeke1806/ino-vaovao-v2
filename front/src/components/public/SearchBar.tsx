import * as React from 'react';
import { Image, TextInput, View } from 'react-native';
import { SEARCH } from '../../utils/Icons';
import { globalStyles } from '../../styles/global';

const SearchBar: React.FC = () => {
  return (
    <View
      style={[
        globalStyles.elevation,
        {
          backgroundColor: 'white',
          borderRadius: 100,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}
    >
      <Image
        source={SEARCH}
        style={{
          width: globalStyles.iconSize,
          height: globalStyles.iconSize,
          marginRight: globalStyles.iconSize,
        }}
      />
      <TextInput placeholder="Search" />
    </View>
  );
};

export default SearchBar;
