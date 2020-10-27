import * as React from 'react';

import SubmitBtn from '../public/SubmitBtn';
import { useCancelRequest } from '../../api/friend-history/cancel-request/service';

interface Prop {
  friendId: number;
}

const CancelRequestBtn: React.FC<Prop> = ({ friendId }) => {
  const { submit, loading } = useCancelRequest({ friendId });
  return (
    <SubmitBtn
      title="Annuler"
      onClick={submit}
      loading={loading}
      btnColor="blabla"
    />
  );
};

export default CancelRequestBtn;
