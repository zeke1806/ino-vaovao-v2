import * as React from 'react';

import { CONTACT } from '../../../utils/Icons';
import { HomeNavigatorProps } from '../../../navigations/MainNavigator';
import IconWithBadge from '../../public/IconWithBadge';
import { useFriendRequests } from '../../../api/user/friend-request/service';
import { useNavigation } from '@react-navigation/core';

const ContactIcon: React.FC = () => {
  const navigation = useNavigation<HomeNavigatorProps>();
  const { data } = useFriendRequests();

  const reqNb = data ? String(data.friendRequests.length) : '0';

  return (
    <IconWithBadge
      img={CONTACT}
      onPress={(): void => {
        navigation.navigate('ContactNavigator');
      }}
      badge={reqNb}
    />
  );
};

export default ContactIcon;
