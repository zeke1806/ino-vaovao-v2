import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import { View } from 'native-base';

const Header: React.FC = () => {
  return (
    <View>
      <CommonAvatar size="medium" />
    </View>
  );
};

export default Header;
