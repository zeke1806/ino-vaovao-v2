import * as React from 'react';

import { Button, Text } from 'native-base';

import { Alert } from 'react-native';
import { Spinner } from '../public/SubmitBtn';
import { globalStyles } from '../../styles/global';
import { useCreateDiscussion } from '../../api/discussion/create-discussion/service';
import { useMe } from '../../api/user/me/me.service';
import { useNameGroupe } from '../../providers/nameGroupe';
import { useSelectRecipientState } from '../../providers/select-recipient/selectRecipient.consumer';

const NextBtn: React.FC = () => {
  const { name } = useNameGroupe();
  const { selectedRecipient } = useSelectRecipientState();
  const { submit, loading } = useCreateDiscussion();
  const { meData } = useMe();

  const handleSubmit = (): void => {
    if (meData && name !== '') {
      submit({
        data: {
          name,
          members: [...selectedRecipient.map((rec) => rec.id), meData.me.id],
        },
        clientId: meData.me.id,
      });
    } else {
      Alert.alert(
        'Erreur',
        'Veuiller donner un nom au groupe',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Button transparent onPress={handleSubmit}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
