import * as React from 'react';

import ContactNavigatorSearch from '../contact-navigator/Search';
import { useFilterUser } from '../../providers/filterUser';

const SuggSearch: React.FC = () => {
  const { search, setSearch } = useFilterUser();
  return (
    <ContactNavigatorSearch
      value={search.suggestion}
      onChange={(value): void => setSearch(value, 'suggestion')}
    />
  );
};

export default SuggSearch;
