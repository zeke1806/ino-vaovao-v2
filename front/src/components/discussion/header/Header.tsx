import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import Right from './Right';
import SearchBarHeader from '../../public/SearchBarHeader';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
  return <SearchBarHeader right={Right} />;
};

export default Header;
