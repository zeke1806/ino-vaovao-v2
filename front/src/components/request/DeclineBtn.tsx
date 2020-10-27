import * as React from 'react';

import SubmitBtn from '../public/SubmitBtn';
import { useDeclineFriendRequest } from '../../api/friend-history/decline-friend-request/service';

interface Prop {
  userId: number;
}

const DeclineBtn: React.FC<Prop> = ({ userId }) => {
  const { loading, submit } = useDeclineFriendRequest({ userId });
  return (
    <SubmitBtn
      title="Supprimer"
      onClick={submit}
      loading={loading}
      btnColor="blabla"
    />
  );
};

export default DeclineBtn;
