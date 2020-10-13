import * as React from 'react';
import GroupRecipient from './GroupRecipient';
import SingleRecipient from './SingleRecipient';
import { View } from 'native-base';

const DiscussionType: React.FC = () => {
  // eslint-disable-next-line no-constant-condition
  return <View>{false ? <SingleRecipient /> : <GroupRecipient />}</View>;
};

export default DiscussionType;
