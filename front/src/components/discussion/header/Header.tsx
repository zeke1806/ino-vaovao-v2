import * as React from 'react';

import Right from './Right';
import SearchBarHeader from '../../public/SearchBarHeader';
import { useFilterUser } from '../../../providers/filterUser';

const Header: React.FC = () => {
  const {
    search: { discussion },
    setSearch,
  } = useFilterUser();
  return (
    <SearchBarHeader
      right={Right}
      value={discussion}
      onChange={(value): void => setSearch(value, 'discussion')}
    />
  );
};

export default Header;
