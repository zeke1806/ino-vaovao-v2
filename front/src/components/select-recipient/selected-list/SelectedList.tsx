import * as React from 'react';

import { FlatList, ListRenderItem, View } from 'react-native';

import Item from './Item';
import { User } from '../../../api/types';
import { globalStyles } from '../../../styles/global';
import { useFriends } from '../../../api/user/friends/service';
import { useSelectRecipientState } from '../../../providers/select-recipient/selectRecipient.consumer';

const SelectedList: React.FC = () => {
  const { data } = useFriends();
  const { selectedRecipient } = useSelectRecipientState();

  const renderItem: ListRenderItem<User> | null | undefined = ({ item }) => {
    return <Item user={item} />;
  };

  const seleted = (): User[] => {
    if (!data) return [];
    return data.friends.filter((u) =>
      selectedRecipient.map((sr) => sr.id).includes(u.id),
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        contentContainerStyle={{
          marginTop: globalStyles.space,
        }}
        data={seleted()}
        renderItem={renderItem}
        keyExtractor={(item): string => String(item.id)}
      />
    </View>
  );
};

export default SelectedList;
