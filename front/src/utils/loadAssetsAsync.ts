import { Asset } from 'expo';
import Icons from './Icons';
import { Image } from 'react-native';
import { loadFontAsync } from './loadFontAsync';

function cacheImages(images: Image[]): Image[] {
  return images.map((image: Image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export const loadAssetsAsync = async (): Promise<void> => {
  const imageAssets = cacheImages(Icons);
  await Promise.all([...imageAssets]);
  await loadFontAsync();
};
