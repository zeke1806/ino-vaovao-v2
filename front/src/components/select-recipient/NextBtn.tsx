import * as React from 'react';

import { Button, Text } from 'native-base';

import { SelectRecipientScreenProps } from '../../navigations/MessageNavigator';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';
import { useSelectRecipientState } from '../../providers/select-recipient/selectRecipient.consumer';

const NextBtn: React.FC = () => {
  const { navigate } = useNavigation<SelectRecipientScreenProps>();
  const { selectedRecipient } = useSelectRecipientState();

  const handleNavigate = (): void => {
    if (selectedRecipient.length > 1) {
      navigate('NameGroup');
    } else if (selectedRecipient.length === 1) {
      navigate('Message');
    } else {
      console.log('veuillez selecteionner un destinataire');
    }
  };

  return (
    <Button transparent onPress={handleNavigate}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
