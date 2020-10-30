import * as React from 'react';

import { FlatList, ListRenderItem } from 'react-native';
import { filterUtil, useFilterUser } from '../../../providers/filterUser';

import Item from './Item';
import { User } from '../../../api/types';
import { useFriends } from '../../../api/user/friends/service';

const Suggestion: React.FC = () => {
  const { data, loading } = useFriends();
  const { search } = useFilterUser();

  const renderItem: ListRenderItem<User> | null | undefined = ({ item }) => {
    return <Item user={item} />;
  };

  const friends = data ? filterUtil(data.friends, search.selectRecipient) : [];

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

export default Suggestion;
