import * as React from 'react';

import ContactNavigatorSearch from '../contact-navigator/Search';
import { useFilterUser } from '../../providers/filterUser';

const FriendSearch: React.FC = () => {
  const { search, setSearch } = useFilterUser();
  return (
    <ContactNavigatorSearch
      value={search.friend}
      onChange={(value): void => setSearch(value, 'friend')}
    />
  );
};

export default FriendSearch;
