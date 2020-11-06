import * as React from 'react';

import CommonAvatar from './CommonAvatar';
import { useMe } from '../../api/user/me/me.service';
import { useNavigation } from '@react-navigation/core';

const MeAvatar: React.FC = () => {
  const navigation = useNavigation();
  const { meData } = useMe();

  const img = function f(): { uri: string } | undefined {
    if (!meData) return undefined;
    if (!meData.me.currentPhoto) return undefined;
    return {
      uri: meData.me.currentPhoto.url,
    };
  };

  const connected = !meData ? false : meData.me.statusConnected;

  return (
    <CommonAvatar
      size="medium"
      connected={false}
      onPress={(): void => {
        navigation.navigate('ProfileNavigator');
      }}
      img={img()}
    />
  );
};

export default MeAvatar;
