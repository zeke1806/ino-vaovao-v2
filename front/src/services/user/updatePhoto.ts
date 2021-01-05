import { useMutation } from '@vue/apollo-composable';
import { MutationUpdatePhotoArgs } from 'src/api/types';
import { UpdatePhotoData, UPDATE_PHOTO } from 'src/api/user';
import { Plugins, CameraResultType } from '../../utils/capacitor';

const { Camera } = Plugins;

export const useUpdatePhoto = () => {
  const { mutate, loading } = useMutation<UpdatePhotoData, MutationUpdatePhotoArgs>(UPDATE_PHOTO);

  const updatePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.webPath;
    // Can be set to the src of an image now
    if(imageUrl) {
      const blob = await fetch(imageUrl).then(r => r.blob());
      const formData = new FormData();
      formData.append('file', blob, `${image.path || ''}.${image.format}`);
      void mutate({
        file: formData
      });
    }
  };

  return {
    updatePhoto,
    loading
  }
}
