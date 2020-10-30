import * as React from 'react';

import { Button, Text } from 'native-base';

import { globalStyles } from '../../styles/global';
import { useDiscuss } from '../../utils/discuss';
import { useSelectRecipientState } from '../../providers/select-recipient/selectRecipient.consumer';

const NextBtn: React.FC = () => {
  const { selectedRecipient } = useSelectRecipientState();
  const { discuss } = useDiscuss(selectedRecipient);

  return (
    <Button transparent onPress={discuss}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
