import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import CommonHeader from '../../public/header/Header';
import SelectCategory from './SelectCategory';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonHeader
      left={
        <CommonAvatar
          size="medium"
          onPress={(): void => navigation.navigate('ProfileNavigator')}
          connected={true}
        />
      }
      title="Decouverte"
      right={<SelectCategory />}
    />
  );
};

export default Header;
