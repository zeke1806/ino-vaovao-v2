import * as React from 'react';
import * as listStyle from '../contact-navigator/listStyle';

import { Text, View } from 'native-base';

import CommonAvatar from '../public/CommonAvatar';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import SubmitBtn from '../public/SubmitBtn';
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
              <SubmitBtn
                title="Confirmer"
                onClick={(): void => {
                  //
                }}
                loading={false}
                btnColor={globalStyles.colors.secondary}
              />
            </View>
            <SubmitBtn
              title="Supprimer"
              onClick={(): void => {
                //
              }}
              loading={false}
              btnColor="blabla"
            />
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
    />
  );
};

export default List;
