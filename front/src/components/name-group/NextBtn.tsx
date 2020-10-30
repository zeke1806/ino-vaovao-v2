import * as React from 'react';

import { Button, Text } from 'native-base';
import {
  NameGroupScreenRouteProp,
  SelectRecipientScreenProps,
} from '../../navigations/MessageNavigator';
import { useNavigation, useRoute } from '@react-navigation/core';

import { globalStyles } from '../../styles/global';

const NextBtn: React.FC = () => {
  const { navigate } = useNavigation<SelectRecipientScreenProps>();
  const { params } = useRoute<NameGroupScreenRouteProp>();

  const handleNavigate = (): void => {
    navigate('Message', {
      recipient: params.recipient,
    });
  };

  return (
    <Button transparent onPress={handleNavigate}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
