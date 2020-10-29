import * as React from 'react';

import CommonAvatar from '../../public/CommonAvatar';
import CommonHeader from '../../public/header/Header';
import MeAvatar from '../../public/MeAvatar';
import SelectCategory from './SelectCategory';

const Header: React.FC = () => {
  return (
    <CommonHeader
      left={<MeAvatar />}
      title="Decouverte"
      right={<SelectCategory />}
    />
  );
};

export default Header;
