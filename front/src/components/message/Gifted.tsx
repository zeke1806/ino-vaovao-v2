import { Discussion, Message, PaginationMeta, User } from '../../api/types';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import React from 'react';
import { Spinner } from 'native-base';
import { useSendMessage } from '../../api/message/send-message/service';

interface GiftedProp {
  messages: Message[];
  discussion: Discussion;
  me: User;
  pagination: PaginationMeta;
  fetchMore: () => void;
}

const Gifted: React.FC<GiftedProp> = ({
  messages,
  discussion,
  me,
  fetchMore,
  pagination,
}) => {
  const { submit } = useSendMessage();

  const formatedMessages = messages.map((m) => ({
    _id: m.id,
    text: m.content,
    createdAt: new Date(m.createdAt),
    user: {
      _id: m.sender.id,
      name: m.sender.username,
      avatar: m.sender.currentPhoto ? m.sender.currentPhoto.url : undefined,
    },
  }));

  const onSend = React.useCallback((messages: IMessage[]): void => {
    submit({
      clientId: me.id,
      data: {
        content: messages[0].text,
        discussionId: discussion.id,
      },
    });
  }, []);

  const isFetchableMore = pagination.currentPage !== pagination.totalPages;

  return (
    <GiftedChat
      messages={formatedMessages}
      onSend={onSend}
      user={{
        _id: me.id,
        name: me.username,
        avatar: me.currentPhoto ? me.currentPhoto.url : undefined,
      }}
      loadEarlier={isFetchableMore}
      infiniteScroll={isFetchableMore}
      onLoadEarlier={fetchMore}
    />
  );
};

export default React.memo(Gifted);
