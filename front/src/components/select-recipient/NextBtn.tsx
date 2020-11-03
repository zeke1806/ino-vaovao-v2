import * as React from 'react';

import { Button, Text } from 'native-base';
import {
  MessageScreenParams,
  NameGroupParams,
} from '../../navigations/MessageNavigator';

import { Alert } from 'react-native';
import { Spinner } from '../public/SubmitBtn';
import { globalStyles } from '../../styles/global';
import { isDiscussionExist } from '../../utils/isDiscussionExist';
import { useCreateDiscussion } from '../../api/discussion/create-discussion/service';
import { useMe } from '../../api/user/me/me.service';
import { useNavigation } from '@react-navigation/core';
import { useSelectRecipientState } from '../../providers/select-recipient/selectRecipient.consumer';
import { useUserDiscussions } from '../../api/discussion/user-discussions/service';

const NextBtn: React.FC = () => {
  const { navigate } = useNavigation();
  const { meData } = useMe();
  const { selectedRecipient } = useSelectRecipientState();
  const { data } = useUserDiscussions();
  const { submit, loading } = useCreateDiscussion();

  const me = meData!.me;
  const discussions = data ? data.userDiscussions : [];
  const members = [me, ...selectedRecipient];

  const handleNavigate = (): void => {
    const discussion = isDiscussionExist(members, discussions);
    if (members.length <= 1) {
      Alert.alert(
        'Erreur',
        'Veuiller selectionner un destinataire',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    } else if (discussion) {
      navigate('Message', {
        discussion,
      } as MessageScreenParams);
    } else {
      if (members.length > 2) {
        navigate('NameGroup', {
          members,
        } as NameGroupParams);
      } else if (members.length === 2) {
        submit({
          data: {
            members: members.map((m) => m.id),
            name: `${members[0].username}-${members[1].username}`,
          },
        });
      }
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Button transparent onPress={handleNavigate}>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
