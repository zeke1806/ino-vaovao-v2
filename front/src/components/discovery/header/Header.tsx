import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import CommonHeader from '../../public/header/Header';
import SelectCategory from './SelectCategory';

const Header: React.FC = () => {
  return (
    <CommonHeader
      left={<CommonAvatar size="medium" />}
      title="Decouverte"
      right={<SelectCategory />}
    />
  );
};

export default Header;
