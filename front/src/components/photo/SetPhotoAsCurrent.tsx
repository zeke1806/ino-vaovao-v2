import * as React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import SubmitBtn from '../public/SubmitBtn';
import { useSetCurrentPhoto } from '../../api/photo-profile/set-current-photo/setCurrentPhoto.service';

interface SetPhotoAsCurrent {
  publicId: string;
}

const SetPhotoAsCurrent: React.FC<SetPhotoAsCurrent> = ({ publicId }) => {
  const { loading, submit } = useSetCurrentPhoto({ publicId });
  return (
    <>
      <Spinner visible={loading} />
      <SubmitBtn title="Actuel" onClick={submit} loading={false} />
    </>
  );
};

export default SetPhotoAsCurrent;
