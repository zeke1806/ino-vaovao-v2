import * as React from 'react';

import SearchBar from '../public/SearchBar';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';
import { useFilterUser } from '../../providers/filterUser';

const Search: React.FC = () => {
  const { search, setSearch } = useFilterUser();
  return (
    <View style={{ paddingHorizontal: globalStyles.space * 3 }}>
      <SearchBar
        value={search.selectRecipient}
        onChange={(value): void => setSearch(value, 'selectRecipient')}
      />
    </View>
  );
};

export default Search;
