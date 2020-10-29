import * as React from 'react';

import { Text, View } from 'native-base';

import CancelRequestBtn from './CancelRequestBtn';
import CommonAvatar from '../public/CommonAvatar';
import SendRequestBtn from './SendRequestBtn';
import { User } from '../../api/types';
import { globalStyles } from '../../styles/global';

interface Prop {
  item: User;
}

const ListItem: React.FC<Prop> = ({ item }) => {
  return (
    <View
      style={{
        marginTop: globalStyles.space,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CommonAvatar
        size="medium"
        img={item.currentPhoto ? { uri: item.currentPhoto.url } : undefined}
      />
      <View>
        <Text style={{ marginBottom: globalStyles.space }}>
          {item.username}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {item.requested ? (
            <CancelRequestBtn friendId={item.id} />
          ) : (
            <SendRequestBtn friendId={item.id} />
          )}
        </View>
      </View>
    </View>
  );
};

export default React.memo(ListItem);
