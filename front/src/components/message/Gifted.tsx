import { Discussion, Message } from '../../api/types';

import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react';
import { useMe } from '../../api/user/me/me.service';
import { useSendMessage } from '../../api/message/send-message/service';

interface GiftedProp {
  messages: Message[];
  discussion: Discussion;
}

const Gifted: React.FC<GiftedProp> = ({ messages, discussion }) => {
  const { meData } = useMe();
  const { submit } = useSendMessage();

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

  const onSend = React.useCallback(
    (
      messages: {
        _id: number;
        text: string;
        createdAt: Date;
        user: {
          _id: number;
          name: string;
          avatar: string | undefined;
        };
      }[],
    ): void => {
      submit({
        data: {
          content: messages[0].text,
          discussionId: discussion.id,
        },
      });
    },
    [],
  );

  return (
    <GiftedChat
      messages={formatMessages}
      onSend={onSend}
      user={{
        _id: me.id,
        name: me.username,
        avatar: me.currentPhoto ? me.currentPhoto.url : undefined,
      }}
    />
  );
};

export default Gifted;
