import * as React from 'react';

import SubmitBtn from '../public/SubmitBtn';
import { globalStyles } from '../../styles/global';
import { useSendFriendRequest } from '../../api/friend-history/send-friend-request/sendFriendRequest.service';

interface Prop {
  friendId: number;
}

const SendRequestBtn: React.FC<Prop> = ({ friendId }) => {
  const { submit, loading } = useSendFriendRequest({
    friendId,
  });
  return (
    <SubmitBtn
      title="Envoyer"
      onClick={submit}
      loading={loading}
      btnColor={globalStyles.colors.secondary}
    />
  );
};

export default SendRequestBtn;
