import * as React from 'react';

import { Discussion } from '../../../api/types';
import GroupRecipient from './GroupRecipient';
import SingleRecipient from './SingleRecipient';
import { View } from 'native-base';

interface DiscussionTypeProp {
  discussion: Discussion;
}

const DiscussionType: React.FC<DiscussionTypeProp> = ({ discussion }) => {
  const img1 = discussion.members[0].currentPhoto
    ? discussion.members[0].currentPhoto.url
    : undefined;
  const img2 = discussion.members[1].currentPhoto
    ? discussion.members[1].currentPhoto.url
    : undefined;

  return (
    <View>
      {discussion.members.length === 2 ? (
        <SingleRecipient name={discussion.name} />
      ) : (
        <GroupRecipient
          name={discussion.name || 'Message Groupe'}
          members={discussion.members}
          creator={discussion.creator.username}
          img1={img1}
          img2={img2}
        />
      )}
    </View>
  );
};

export default DiscussionType;
