import * as React from 'react';

import { Discussion } from '../../../api/types';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { useMe } from '../../../api/user/me/me.service';
import { useUserDiscussions } from '../../../api/discussion/user-discussions/service';

interface DiscussionList {
  before?: React.FC<unknown>;
}

const DiscussionList: React.FC<DiscussionList> = ({ before: Before }) => {
  const {
    data,
    loading,
    subscribeToSendMessageEvent,
    subscribeToMore,
  } = useUserDiscussions();
  const { meData } = useMe();

  const renderItem: ListRenderItem<Discussion> | null | undefined = ({
    item,
  }) => <Item discussion={item} />;

  React.useEffect(() => {
    if (meData) {
      subscribeToSendMessageEvent(
        {
          clientId: meData.me.id,
          userId: meData.me.id,
        },
        subscribeToMore,
      );
    }
    return (): void => console.log('unmount');
  }, [meData?.me.id, subscribeToMore]);

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
