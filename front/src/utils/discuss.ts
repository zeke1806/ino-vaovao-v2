import { SelectRecipientScreenProps } from '../navigations/MessageNavigator';
import { useNavigation } from '@react-navigation/core';

interface Return {
  discuss: () => void;
}

export const useDiscuss = (recipient: number[]): Return => {
  const { navigate } = useNavigation<SelectRecipientScreenProps>();

  const discuss = (): void => {
    if (recipient.length > 1) {
      navigate('NameGroup');
    } else if (recipient.length === 1) {
      navigate('Message');
    } else {
      console.log('Veuillez selecteionner un destinataire');
    }
  };

  return {
    discuss,
  };
};
