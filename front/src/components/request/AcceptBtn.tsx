import * as React from 'react';

import SubmitBtn from '../public/SubmitBtn';
import { globalStyles } from '../../styles/global';
import { useAcceptFriendRequest } from '../../api/friend-history/accept-friend-request/service';

interface Prop {
  userId: number;
}

const AcceptBtn: React.FC<Prop> = ({ userId }) => {
  const { submit, loading } = useAcceptFriendRequest({ userId });
  return (
    <SubmitBtn
      title="Confirmer"
      onClick={submit}
      loading={loading}
      btnColor={globalStyles.colors.secondary}
    />
  );
};

export default AcceptBtn;
