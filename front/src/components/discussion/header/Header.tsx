import * as React from 'react';
import Right from './Right';
import SearchBarHeader from '../../public/SearchBarHeader';

const Header: React.FC = () => {
  return <SearchBarHeader right={Right} />;
};

export default Header;
