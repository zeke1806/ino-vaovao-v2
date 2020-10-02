import * as React from 'react';
import EditProfile from './EditPhoto';
import Image from './Image';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

const Photo: React.FC = () => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Image />
        <EditProfile />
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 10,
        }}
      >
        <ProfileTitleText text="Sarah Milord" size={20} />
      </View>
    </View>
  );
};

export default Photo;
