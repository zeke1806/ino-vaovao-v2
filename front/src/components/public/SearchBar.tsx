import * as React from 'react';
import { Image } from 'react-native';
import RoundedInput from './RoundedInput';
import { SEARCH } from '../../utils/Icons';
import { globalStyles } from '../../styles/global';

const SearchBar: React.FC = () => {
  const iconSize = globalStyles.iconSize;
  return (
    <RoundedInput
      placeholder="Recherche"
      leftIcon={
        <Image
          source={SEARCH}
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: iconSize,
          }}
        />
      }
    />
  );
};

export default SearchBar;
