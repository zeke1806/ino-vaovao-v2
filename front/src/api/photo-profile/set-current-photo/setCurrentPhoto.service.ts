import { ME, MeData } from '../../user/me/me.gql';
import { SET_CURRENT_PHOTO, SetCurrentPhotoData } from './setCurrentPhoto.gql';
import { useApolloClient, useMutation } from '@apollo/client';
import { MutationSetCurrentPhotoArgs } from '../../types';
import { PhotoScreenNavigation } from '../../../navigations/ProfileNavigator';
import produce from 'immer';
import { useNavigation } from '@react-navigation/core';

export interface UseSetCurrentPhoto {
  loading: boolean;
  submit: () => void;
}

export const useSetCurrentPhoto = (
  variables: MutationSetCurrentPhotoArgs,
): UseSetCurrentPhoto => {
  const navigation = useNavigation<PhotoScreenNavigation>();
  const apollo = useApolloClient();
  const [set, { loading }] = useMutation<
    SetCurrentPhotoData,
    MutationSetCurrentPhotoArgs
  >(SET_CURRENT_PHOTO, {
    onCompleted({ setCurrentPhoto }) {
      if (setCurrentPhoto) {
        const prev = apollo.readQuery<MeData>({
          query: ME,
        });
        if (prev) {
          apollo.writeQuery<MeData>({
            query: ME,
            data: produce(prev, (draft) => {
              draft.me.currentPhoto = draft.me.photos.find(
                (p) => p.publicId === variables.publicId,
              );
            }),
          });
        }
        navigation.goBack();
      }
    },
  });

  const submit = (): void => {
    set({ variables });
  };

  return {
    loading,
    submit,
  };
};
