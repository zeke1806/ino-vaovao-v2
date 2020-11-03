import * as React from 'react';

import { Text } from 'native-base';
import { useMe } from '../../../api/user/me/me.service';

interface SingleRecipientProp {
  name: string;
}

const SingleRecipient: React.FC<SingleRecipientProp> = ({ name }) => {
  const { meData } = useMe();
  const meName = meData!.me.username;
  const recipientName: string = name.split('-').find((n) => n !== meName)!;

  return <Text>{`A: ${recipientName}`}</Text>;
};

export default SingleRecipient;
