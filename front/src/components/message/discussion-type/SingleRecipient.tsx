import * as React from 'react';

import { Text } from 'native-base';
import { useGetRecipientName } from '../../../utils/getRecipientName';

interface SingleRecipientProp {
  name: string;
}

const SingleRecipient: React.FC<SingleRecipientProp> = ({ name }) => {
  const recipientName = useGetRecipientName(name);

  return <Text>{`A: ${recipientName}`}</Text>;
};

export default SingleRecipient;
