import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { alert } from '../../utils/alert';
import { globalStyles } from '../../styles/global';
import { useRemoveProfileImage } from '../../api/photo-profile/remove-profile-image/removeProfileImage.service';

interface RemovePhoto {
  publicId: string;
}

const RemovePhoto: React.FC<RemovePhoto> = ({ publicId }) => {
  const { submit, loading } = useRemoveProfileImage({
    photoProfilePublicId: publicId,
  });

  return (
    <>
      <Spinner visible={loading} />
      <MaterialIcons
        name="clear"
        size={globalStyles.iconSize}
        color="white"
        onPress={(): void => {
          alert(
            'Confirmation',
            'La photo sera deffinitivement supprimer',
            'Enregistrer',
            'default',
            submit,
          );
        }}
      />
    </>
  );
};

export default RemovePhoto;
