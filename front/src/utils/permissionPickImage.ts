import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { alert } from '../utils/alert';
import { useEffect } from 'react';

export const usePermissionPickImage = (): void => {
  useEffect(() => {
    (async (): Promise<void> => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert(
            'Erreur',
            'Sorry, we need camera roll permissions to make this work!',
            'Cancel',
          );
        }
      }
    })();
  }, []);
};
