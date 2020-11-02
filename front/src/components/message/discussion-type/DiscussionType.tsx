import * as React from 'react';

import { Discussion } from '../../../api/types';
import GroupRecipient from './GroupRecipient';
import SingleRecipient from './SingleRecipient';
import { View } from 'native-base';

interface DiscussionTypeProp {
  discussion: Discussion;
}

const DiscussionType: React.FC<DiscussionTypeProp> = ({ discussion }) => {
  const img1 = discussion.participant[0].currentPhoto
    ? discussion.participant[0].currentPhoto.url
    : undefined;
  const img2 = discussion.participant[1].currentPhoto
    ? discussion.participant[1].currentPhoto.url
    : undefined;

  return (
    <View>
      {discussion.participant.length === 2 ? (
        <SingleRecipient />
      ) : (
        <GroupRecipient
          name={discussion.name || 'Message Groupe'}
          members={discussion.participant}
          creator={discussion.creator.username}
          img1={img1}
          img2={img2}
        />
      )}
    </View>
  );
};

export default DiscussionType;
