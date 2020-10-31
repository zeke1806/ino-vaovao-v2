import * as React from 'react';

import { Text, View } from 'native-base';

import CommonAvatar from '../../public/CommonAvatar';
import { Discussion } from '../../../api/types';
import GroupAvatar from '../../public/GroupAvatar';
import IndicatorBadge from '../../public/IndicatorBadge';
import { globalStyles } from '../../../styles/global';

interface ItemProps {
  discussion: Discussion;
}

const Item: React.FC<ItemProps> = ({ discussion }) => {
  const { lastMessage, participant } = discussion;
  const { message, view } = lastMessage;
  const { sender } = message;
  const { currentPhoto } = sender;

  const img = currentPhoto ? { uri: currentPhoto.url } : undefined;
  const groupImg1 = participant[0].currentPhoto
    ? participant[0].currentPhoto.url
    : undefined;
  const groupImg2 = participant[1].currentPhoto
    ? participant[1].currentPhoto.url
    : undefined;

  const space = globalStyles.space;

  return (
    <View
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
    </View>
  );
};

export default Item;
