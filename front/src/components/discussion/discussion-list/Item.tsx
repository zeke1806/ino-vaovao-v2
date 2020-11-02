import * as React from 'react';

import { Text, View } from 'native-base';

import CommonAvatar from '../../public/CommonAvatar';
import { Discussion } from '../../../api/types';
import { DiscussionScreenNavigation } from '../../../navigations/HomeNavigator';
import GroupAvatar from '../../public/GroupAvatar';
import IndicatorBadge from '../../public/IndicatorBadge';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useNavigation } from '@react-navigation/core';

interface ItemProps {
  discussion: Discussion;
}

const Item: React.FC<ItemProps> = ({ discussion }) => {
  const { navigate } = useNavigation();
  const { lastMessage, participant } = discussion;
  const { message, view } = lastMessage;
  const { sender } = message;
  const { currentPhoto } = sender;

  const handleClick = (): void =>
    navigate('MessageNavigator', {
      screen: 'Message',
      params: {
        discussionId: discussion.id,
        recipient: discussion.participant.map((p) => p.id),
      },
    });

  const img = currentPhoto ? { uri: currentPhoto.url } : undefined;
  const groupImg1 = participant[0].currentPhoto
    ? participant[0].currentPhoto.url
    : undefined;
  const groupImg2 = participant[1].currentPhoto
    ? participant[1].currentPhoto.url
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
      {participant.length === 1 ? (
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
        <Text style={{ color: '#3F3F3F' }}>{sender.username}</Text>
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
