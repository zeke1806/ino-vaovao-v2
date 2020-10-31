import * as React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import CommonAvatar from '../../public/CommonAvatar';
import { User } from '../../../api/types';
import { useFriends } from '../../../api/user/friends/service';

const Item: React.FC<{ user: User }> = ({ user }) => (
  <CommonAvatar
    size="medium"
    name={user.username}
    img={user.currentPhoto ? { uri: user.currentPhoto.url } : undefined}
  />
);

const List: React.FC = () => {
  const { data, loading } = useFriends();
  const renderItem: ListRenderItem<User> | null | undefined = ({ item }) => (
    <Item user={item} />
  );

  const friends = data ? data.friends : [];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data={friends}
      renderItem={renderItem}
      keyExtractor={(item): string => String(item.id)}
      // keyExtractor={}
    />
  );
};

export default List;
