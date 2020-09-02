import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export async function loadFontAsync(): Promise<void> {
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
}
