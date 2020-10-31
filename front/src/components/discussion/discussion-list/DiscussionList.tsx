import * as React from 'react';

import { Discussion } from '../../../api/types';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { useUserDiscussions } from '../../../api/discussion/user-discussions/service';

interface DiscussionList {
  before?: React.FC<unknown>;
}

const DiscussionList: React.FC<DiscussionList> = ({ before: Before }) => {
  const { data, loading } = useUserDiscussions();

  const renderItem: ListRenderItem<Discussion> | null | undefined = ({
    item,
  }) => <Item discussion={item} />;

  const discussions = data ? data.userDiscussions : [];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={discussions}
      renderItem={renderItem}
      ListHeaderComponent={Before || null}
      keyExtractor={(item): string => String(item.id)}
    />
  );
};

export default DiscussionList;
