import * as React from 'react';
import * as listStyle from '../contact-navigator/listStyle';

import { filterUtil, useFilterUser } from '../../providers/filterUser';

import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import { ListRenderItem } from 'react-native';
import { User } from '../../api/types';
import { useFriendSuggestion } from '../../api/user/friend-suggestion/friendSuggestion.service';

const List: React.FC = () => {
  const {
    data,
    loading,
    subscribeToSendFriendRequest,
    subscribeToDeclineFriendRequest,
  } = useFriendSuggestion();
  const { search } = useFilterUser();

  React.useEffect(() => {
    subscribeToSendFriendRequest();
    subscribeToDeclineFriendRequest();
  }, []);

  const renderItem: ListRenderItem<User> | null | undefined = React.useCallback(
    ({ item }) => {
      return <ListItem item={item} />;
    },
    [],
  );

  const suggestions =
    data && !loading
      ? filterUtil(data.friendSuggestion, search.suggestion)
      : [];

  return (
    <FlatList
      data={suggestions}
      renderItem={renderItem}
      contentContainerStyle={listStyle.contentContainerStyle}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

export default List;
