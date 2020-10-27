import * as React from 'react';
import * as listStyle from '../contact-navigator/listStyle';

import { Text, View } from 'native-base';

import CancelRequestBtn from './CancelRequestBtn';
import CommonAvatar from '../public/CommonAvatar';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import SendRequestBtn from './SendRequestBtn';
import SubmitBtn from '../public/SubmitBtn';
import { User } from '../../api/types';
import { globalStyles } from '../../styles/global';
import { useFriendSuggestion } from '../../api/user/friend-suggestion/friendSuggestion.service';

const List: React.FC = () => {
  const { data, loading } = useFriendSuggestion();

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

  const suggestions = data && !loading ? data.friendSuggestion : [];

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
