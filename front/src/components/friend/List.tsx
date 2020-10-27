import * as React from 'react';
import * as flatListStyle from '../contact-navigator/listStyle';

import { ListRenderItem, View } from 'react-native';

import CommonAvatar from '../public/CommonAvatar';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'native-base';
import { User } from '../../api/types';
import { globalStyles } from '../../styles/global';
import { useFriends } from '../../api/user/friends/service';

const List: React.FC = () => {
  const { data, loading } = useFriends();

  const renderItem: ListRenderItem<User> | null | undefined = ({ item }) => {
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
        <Text>{item.username}</Text>
      </View>
    );
  };

  const friends = data ? data.friends : [];

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      contentContainerStyle={flatListStyle.contentContainerStyle}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

export default List;
