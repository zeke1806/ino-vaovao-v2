import * as React from 'react';
import Masonry from './Masonry';
import { PhotoProfile } from '../../../api/types';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

export interface GalleryProps {
  photos: PhotoProfile[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <View>
      <ProfileTitleText size={18} text="Photos" />
      <Masonry photos={photos} />
    </View>
  );
};

export default Gallery;
