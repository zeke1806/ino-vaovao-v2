import {
  Discussion,
  Message,
  Message as MyMessage,
  User,
} from '../../api/types';
import React, { useCallback, useEffect, useState } from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import { Text } from 'react-native-svg';
import { useMe } from '../../api/user/me/me.service';
import { useMessages } from '../../api/message/messages/service';

interface GiftedProp {
  messages: Message[];
}

const Gifted: React.FC<GiftedProp> = ({ messages }) => {
  const { meData } = useMe();

  const me = meData!.me;
  const formatMessages = messages.map((m) => ({
    _id: m.id,
    text: m.content,
    createdAt: new Date(m.createdAt),
    user: {
      _id: m.sender.id,
      name: m.sender.username,
      avatar: m.sender.currentPhoto ? m.sender.currentPhoto.url : undefined,
    },
  }));

  return (
    <GiftedChat
      messages={formatMessages}
      onSend={(messages): void => {
        //
      }}
      user={{
        _id: me.id,
        name: me.username,
        avatar: me.currentPhoto ? me.currentPhoto.url : undefined,
      }}
    />
  );
};

export default Gifted;
