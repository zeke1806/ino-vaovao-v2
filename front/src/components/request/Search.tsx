import * as React from 'react';

import ContactNavigatorSearch from '../contact-navigator/Search';
import { useFilterUser } from '../../providers/filterUser';

const RequestSearch: React.FC = () => {
  const { search, setSearch } = useFilterUser();
  return (
    <ContactNavigatorSearch
      value={search.request}
      onChange={(value): void => setSearch(value, 'request')}
    />
  );
};

export default RequestSearch;
