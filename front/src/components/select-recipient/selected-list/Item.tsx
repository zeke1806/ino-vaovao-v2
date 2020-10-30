import * as React from 'react';

import { Image, TouchableOpacity } from 'react-native';

import CommonAvatar from '../../public/CommonAvatar';
import { UNSELECT } from '../../../utils/Icons';
import { User } from '../../../api/types';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';
import { useSelectRecipientDispatch } from '../../../providers/select-recipient/selectRecipient.consumer';

interface Prop {
  user: User;
}

const Unselect: React.FC<Prop> = ({ user }) => {
  const dispatch = useSelectRecipientDispatch();

  const unselect = (): void => {
    dispatch({ type: 'UNSELECT', id: user.id });
  };

  const space = globalStyles.space / 5;
  const iconSize = globalStyles.iconSize * 1.1;

  return (
    <View style={{ position: 'relative' }}>
      <CommonAvatar
        size="medium"
        name={user.username}
        img={user.currentPhoto ? { uri: user.currentPhoto.url } : undefined}
      />
      <TouchableOpacity
        onPress={unselect}
        style={{
          position: 'absolute',
          top: -space,
          right: -space,
        }}
      >
        <Image
          source={UNSELECT}
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Unselect;
