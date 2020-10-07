import {
  UPLOAD_PROFILE_IMAGE,
  UploadProfileImageData,
} from './uploadProfileImage.gql';
import { MutationUploadProfileImageArgs } from '../../types';
import { ReactNativeFile } from 'apollo-upload-client';
import { useMutation } from '@apollo/client';

interface UseUploadProfileImage {
  loading: boolean;
  submit: (file: ReactNativeFile) => void;
}

export const useUploadProfileImage = (): UseUploadProfileImage => {
  const [upload, { loading }] = useMutation<
    UploadProfileImageData,
    MutationUploadProfileImageArgs
  >(UPLOAD_PROFILE_IMAGE, {
    onCompleted({ uploadProfileImage }) {
      //
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
