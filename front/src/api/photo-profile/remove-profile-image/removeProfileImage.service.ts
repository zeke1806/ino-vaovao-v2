import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import { ME, MeData } from '../../user/me/me.gql';
import {
  REMOVE_PROFILE_IMAGE,
  RemoveProfileImageData,
} from './removeProfileImage.gql';
import { MutationRemoveProfileImageArgs } from '../../types';
import { PhotoScreenNavigation } from '../../../navigations/ProfileNavigator';
import produce from 'immer';
import { useNavigation } from '@react-navigation/core';

function handleUpdateMe(apollo: ApolloClient<unknown>, publicId: string): void {
  const prev = apollo.cache.readQuery<MeData>({
    query: ME,
  });
  if (prev) {
    apollo.cache.writeQuery<MeData>({
      query: ME,
      data: produce(prev, (draft) => {
        const {
          me: { currentPhoto, photos },
        } = draft;
        draft.me.photos = photos.filter((p) => p.publicId !== publicId);
        if (currentPhoto && currentPhoto.publicId === publicId) {
          draft.me.currentPhoto = null;
        }
      }),
    });
  }
}

export interface UseRemoveProfileImage {
  submit: () => void;
  loading: boolean;
}

export const useRemoveProfileImage = (
  variables: MutationRemoveProfileImageArgs,
): UseRemoveProfileImage => {
  const apollo = useApolloClient();
  const navigation = useNavigation<PhotoScreenNavigation>();
  const [remove, { loading }] = useMutation<
    RemoveProfileImageData,
    MutationRemoveProfileImageArgs
  >(REMOVE_PROFILE_IMAGE, {
    onCompleted({ removeProfileImage: { __typename } }) {
      if (__typename === 'RemoveProfileImageOk') {
        handleUpdateMe(apollo, variables.photoProfilePublicId);
        navigation.goBack();
      }
    },
  });

  const submit = (): void => {
    remove({ variables });
  };

  return {
    submit,
    loading,
  };
};
