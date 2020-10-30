import * as React from 'react';

import { Radio, Text, View } from 'native-base';
import {
  useSelectRecipientDispatch,
  useSelectRecipientState,
} from '../../../providers/select-recipient/selectRecipient.consumer';

import CommonAvatar from '../../public/CommonAvatar';
import { User } from '../../../api/types';
import { globalStyles } from '../../../styles/global';

interface Prop {
  user: User;
}

const Item: React.FC<Prop> = ({ user }) => {
  const dispatch = useSelectRecipientDispatch();
  const { selectedRecipient } = useSelectRecipientState();

  const select = (id: number): void => {
    dispatch({ type: 'SELECT', id });
  };

  const selected = selectedRecipient.includes(user.id);
  const space = globalStyles.space;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: space / 2,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <CommonAvatar
          size="medium"
          img={user.currentPhoto ? { uri: user.currentPhoto.url } : undefined}
        />
        <Text>{user.username}</Text>
      </View>

      <Radio
        selected={selected}
        selectedColor={globalStyles.colors.secondary}
        onPress={(): void => select(user.id)}
      />
    </View>
  );
};

export default Item;
