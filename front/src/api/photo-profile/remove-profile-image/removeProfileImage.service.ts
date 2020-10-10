import {
  REMOVE_PROFILE_IMAGE,
  RemoveProfileImageData,
} from './removeProfileImage.gql';
import { MutationRemoveProfileImageArgs } from '../../types';
import { useMutation } from '@apollo/client';

export interface UseRemoveProfileImage {
  submit: () => void;
  loading: boolean;
}

export const useRemoveProfileImage = (
  variables: MutationRemoveProfileImageArgs,
): UseRemoveProfileImage => {
  const [remove, { loading }] = useMutation<
    RemoveProfileImageData,
    MutationRemoveProfileImageArgs
  >(REMOVE_PROFILE_IMAGE);

  const submit = (): void => {
    remove({ variables });
  };

  return {
    submit,
    loading,
  };
};
