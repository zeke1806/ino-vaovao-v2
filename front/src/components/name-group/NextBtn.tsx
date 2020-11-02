import * as React from 'react';

import { Button, Text } from 'native-base';
import {
  NameGroupScreenRouteProp,
  SelectRecipientScreenProps,
} from '../../navigations/MessageNavigator';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Discussion } from '../../api/types';
import { globalStyles } from '../../styles/global';

const NextBtn: React.FC = () => {
  const { navigate } = useNavigation<SelectRecipientScreenProps>();
  const { params } = useRoute<NameGroupScreenRouteProp>();

  const handleNavigate = (): void => {
    navigate('Message', {
      discussion: {
        participant: params.recipient.map((id) => ({
          id,
        })),
      } as Discussion,
    });
  };

  return (
    <Button transparent onPress={handleNavigate}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
