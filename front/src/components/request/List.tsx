import * as React from 'react';
import * as listStyle from '../contact-navigator/listStyle';

import { Text, View } from 'native-base';

import AcceptBtn from './AcceptBtn';
import CommonAvatar from '../public/CommonAvatar';
import DeclineBtn from './DeclineBtn';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { User } from '../../api/types';
import { globalStyles } from '../../styles/global';
import { useFriendRequests } from '../../api/user/friend-request/service';

const List: React.FC = () => {
  const { data, loading } = useFriendRequests();

  const renderItem: ListRenderItem<User> | null | undefined = ({ item }) => {
    return (
      <View
        style={{
          marginTop: globalStyles.space,
          flexDirection: 'row',
          alignItems: 'flex-start',
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
            <View style={{ marginRight: globalStyles.space }}>
              <AcceptBtn userId={item.id} />
            </View>
            <DeclineBtn userId={item.id} />
          </View>
        </View>
      </View>
    );
  };

  const requests = data ? data.friendRequests : [];

  return (
    <FlatList
      data={requests}
      renderItem={renderItem}
      contentContainerStyle={listStyle.contentContainerStyle}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

export default List;
