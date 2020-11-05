import * as React from 'react';

import { Discussion, LastMessage } from '../../../api/types';
import { Text, View } from 'native-base';

import CommonAvatar from '../../public/CommonAvatar';
import GroupAvatar from '../../public/GroupAvatar';
import IndicatorBadge from '../../public/IndicatorBadge';
import { MessageScreenParams } from '../../../navigations/MessageNavigator';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useGetRecipientName } from '../../../utils/getRecipientName';
import { useNavigation } from '@react-navigation/core';

interface ItemProps {
  discussion: Discussion;
}

const Item: React.FC<ItemProps> = ({ discussion }) => {
  const { navigate } = useNavigation();
  const { lastMessage, members, name } = discussion;
  const { message, view } =
    lastMessage ||
    ({
      message: {
        id: 0,
        content: '',
        sender: {
          id: 0,
          username: '',
        },
      },
      view: false,
    } as LastMessage);

  const handleClick = (): void =>
    navigate('MessageNavigator', {
      screen: 'Message',
      params: {
        discussion: discussion,
        recipient: discussion.members.map((p) => p.id),
      } as MessageScreenParams,
    });

  const discussionName = members.length > 2 ? name : useGetRecipientName(name);
  const recipient = discussion.members.find(
    (m) => m.username === discussionName,
  )!;
  const img =
    recipient && recipient.currentPhoto
      ? { uri: recipient.currentPhoto.url }
      : undefined;
  const groupImg1 = members[0].currentPhoto
    ? members[0].currentPhoto.url
    : undefined;
  const groupImg2 = members[1].currentPhoto
    ? members[1].currentPhoto.url
    : undefined;

  const space = globalStyles.space;

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[
        {
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: space / 3,
          paddingHorizontal: space,
          marginVertical: space / 2,
          borderRadius: 100,
        },
        globalStyles.elevation,
      ]}
    >
      {members.length === 2 ? (
        <CommonAvatar size="medium" img={img} />
      ) : (
        <GroupAvatar img1Url={groupImg1} img2Url={groupImg2} />
      )}

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          paddingLeft: globalStyles.space,
        }}
      >
        <Text style={{ color: '#3F3F3F' }}>{discussionName}</Text>
        {view ? (
          <Text>{message.content}</Text>
        ) : (
          <Text style={{ fontWeight: 'bold' }}>{message.content}</Text>
        )}
      </View>

      <View
        style={{
          justifyContent: 'center',
        }}
      >
        {!view && <IndicatorBadge color="grey" />}
      </View>
    </TouchableOpacity>
  );
};

export default Item;
