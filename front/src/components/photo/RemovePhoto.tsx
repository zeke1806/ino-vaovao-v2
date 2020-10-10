import * as React from 'react';
import { Alert } from 'react-native';
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
          Alert.alert(
            'Confirmation',
            'La photo sera deffinitivement supprimer',
            [
              {
                text: 'Enregistrer',
                style: 'default',
                onPress: submit,
              },
              {
                text: 'Cancel',
                style: 'cancel',
              },
            ],
            { cancelable: false },
          );
        }}
      />
    </>
  );
};

export default RemovePhoto;
