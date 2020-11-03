import * as React from 'react';

import { Button, Thumbnail } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/core';

import { BACK_ARROW } from '../../utils/Icons';
import { Message } from '../../api/types';
import { MessageScreenRouteProp } from '../../navigations/MessageNavigator';
import { Spinner } from '../public/SubmitBtn';
import { useRemoveDiscussion } from '../../api/discussion/remove-discussion/service';

interface BackBtnProp {
  messages: Message[];
}

const BackBtn: React.FC<BackBtnProp> = ({ messages }) => {
  const {
    params: { discussion },
  } = useRoute<MessageScreenRouteProp>();
  const { submit, loading } = useRemoveDiscussion({
    discussionId: discussion.id,
  });
  const { goBack } = useNavigation();

  const handleGoBack = (): void => {
    if (messages.length) goBack();
    else submit();
  };

  return loading ? (
    <Spinner />
  ) : (
    <Button transparent onPress={handleGoBack}>
      <Thumbnail
        source={BACK_ARROW}
        style={{
          height: 45,
          width: 45,
        }}
      />
    </Button>
  );
};

export default BackBtn;
