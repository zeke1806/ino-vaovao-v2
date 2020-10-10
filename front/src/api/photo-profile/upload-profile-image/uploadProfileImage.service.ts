import { ME, MeData } from '../../user/me/me.gql';
import {
  UPLOAD_PROFILE_IMAGE,
  UploadProfileImageData,
} from './uploadProfileImage.gql';
import { useApolloClient, useMutation } from '@apollo/client';
import { MutationUploadProfileImageArgs } from '../../types';
import { ReactNativeFile } from 'apollo-upload-client';
import produce from 'immer';

interface UseUploadProfileImage {
  loading: boolean;
  submit: (file: ReactNativeFile) => void;
}

export const useUploadProfileImage = (): UseUploadProfileImage => {
  const apollo = useApolloClient();
  const [upload, { loading }] = useMutation<
    UploadProfileImageData,
    MutationUploadProfileImageArgs
  >(UPLOAD_PROFILE_IMAGE, {
    onCompleted({ uploadProfileImage }) {
      const prevMe = apollo.cache.readQuery<MeData>({
        query: ME,
      });
      if (prevMe) {
        apollo.cache.writeQuery<MeData>({
          query: ME,
          data: produce(prevMe, (draft) => {
            draft.me.currentPhoto = uploadProfileImage;
            draft.me.photos.push(uploadProfileImage);
          }),
        });
      }
    },
  });

  const submit = (file: ReactNativeFile): void => {
    upload({ variables: { file } });
  };

  return {
    loading,
    submit,
  };
};
