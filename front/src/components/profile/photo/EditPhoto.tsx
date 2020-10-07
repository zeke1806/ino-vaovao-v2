import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { Button, Thumbnail } from 'native-base';
import { PENCIL } from '../../../utils/Icons';
import { globalStyles } from '../../../styles/global';
import { usePermissionPickImage } from '../../../utils/permissionPickImage';

const EditPhoto: React.FC = () => {
  usePermissionPickImage();
  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.uri);
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
      <Thumbnail
        source={PENCIL}
        style={{
          width: globalStyles.iconSize * 2,
          height: globalStyles.iconSize * 2,
        }}
      />
    </Button>
  );
};

export default EditPhoto;
