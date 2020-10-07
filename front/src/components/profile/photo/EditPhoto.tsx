import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { Button, Thumbnail } from 'native-base';
import { PENCIL } from '../../../utils/Icons';
import { ReactNativeFile } from 'apollo-upload-client';
import { Spinner } from '../../public/SubmitBtn';
import { globalStyles } from '../../../styles/global';
import { usePermissionPickImage } from '../../../utils/permissionPickImage';
import { useUploadProfileImage } from '../../../api/photo-profile/upload-profile-image/uploadProfileImage.service';

const EditPhoto: React.FC = () => {
  usePermissionPickImage();
  const { loading, submit } = useUploadProfileImage();
  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const file = new ReactNativeFile({
        uri: result.uri,
        name: 'image',
        type: 'image/jpeg',
      });
      submit(file);
    }
  };

  return (
    <Button
      transparent
      style={{
        position: 'absolute',
        bottom: 0,
        left: '30%',
      }}
      onPress={pickImage}
    >
      {loading ? (
        <Spinner color={globalStyles.colors.primary} />
      ) : (
        <Thumbnail
          source={PENCIL}
          style={{
            width: globalStyles.iconSize * 2,
            height: globalStyles.iconSize * 2,
          }}
        />
      )}
    </Button>
  );
};

export default EditPhoto;
