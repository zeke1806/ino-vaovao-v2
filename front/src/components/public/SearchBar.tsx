import * as React from 'react';

import { Image } from 'react-native';
import RoundedInput from './RoundedInput';
import { SEARCH } from '../../utils/Icons';
import { globalStyles } from '../../styles/global';

interface SearchBarProp {
  value?: string;
  onChange?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({ value, onChange }) => {
  const iconSize = globalStyles.iconSize;
  return (
    <RoundedInput
      value={value}
      onChange={onChange}
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
