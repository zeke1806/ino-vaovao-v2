import * as React from 'react';
import Masonry from './Masonry';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

const Gallery: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: 25 }}>
      <ProfileTitleText size={18} text="Photos" />
      <Masonry />
    </View>
  );
};

export default Gallery;
