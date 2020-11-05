import * as React from 'react';

import { Discussion, User } from '../../../api/types';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { ME, MeData } from '../../../api/user/me/me.gql';
import {
  USER_DISCUSSIONS,
  UserDiscussionVars,
  UserDiscussionsData,
} from '../../../api/discussion/user-discussions/gql';

import CommonAvatar from '../../public/CommonAvatar';
import GlobalSpinner from 'react-native-loading-spinner-overlay';
import { MessageScreenParams } from '../../../navigations/MessageNavigator';
import { isDiscussionExist } from '../../../utils/isDiscussionExist';
import { useApolloClient } from '@apollo/client';
import { useCreateDiscussion } from '../../../api/discussion/create-discussion/service';
import { useFriends } from '../../../api/user/friends/service';
import { useNavigation } from '@react-navigation/core';

const handleNavigate = (navigate: any, discussion: Discussion): void => {
  navigate('MessageNavigator', {
    screen: 'Message',
    params: {
      discussion: discussion,
      recipient: discussion.members.map((p) => p.id),
    } as MessageScreenParams,
  });
};

const Item: React.FC<{ user: User }> = ({ user }) => {
  const { navigate } = useNavigation();
  const { cache } = useApolloClient();
  const { submit, loading } = useCreateDiscussion((discussion) =>
    handleNavigate(navigate, discussion),
  );

  const handlePress = (): void => {
    const meData = cache.readQuery<MeData>({ query: ME });
    if (meData) {
      const { me } = meData;
      const discussions = cache.readQuery<
        UserDiscussionsData,
        UserDiscussionVars
      >({
        query: USER_DISCUSSIONS,
        variables: {
          clientId: me.id,
        },
      });
      if (discussions) {
        const members = [me, user];
        const discussion = isDiscussionExist(
          members,
          discussions.userDiscussions,
        );
        if (discussion) {
          handleNavigate(navigate, discussion);
        } else {
          submit({
            clientId: me.id,
            data: {
              members: members.map((m) => m.id),
              name: `${members[0].username}-${members[1].username}`,
            },
          });
        }
      }
    }
  };

  return (
    <>
      <GlobalSpinner visible={loading} />
      <TouchableOpacity onPress={handlePress}>
        <CommonAvatar
          size="medium"
          name={user.username}
          img={user.currentPhoto ? { uri: user.currentPhoto.url } : undefined}
        />
      </TouchableOpacity>
    </>
  );
};

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
