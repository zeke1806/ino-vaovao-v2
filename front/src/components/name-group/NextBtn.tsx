import * as React from 'react';
import { Button, Text } from 'native-base';
import { SelectRecipientScreenProps } from '../../navigations/MainNavigator';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';

const NextBtn: React.FC = () => {
  const { navigate } = useNavigation<SelectRecipientScreenProps>();

  const handleNavigate = (): void => {
    navigate('MessageScreen');
  };

  return (
    <Button transparent onPress={handleNavigate}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
