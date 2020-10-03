import * as React from 'react';
import EditAccount from './EditAccount';
import EditProfile from './EditPhoto';
import Image from './Image';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

interface PhotoProps {
  username: string;
}

const Photo: React.FC<PhotoProps> = ({ username }) => {
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
      >
        <ProfileTitleText text={username} size={20} />
        <View style={{ marginLeft: 10 }}>
          <EditAccount />
        </View>
      </View>
    </View>
  );
};

export default Photo;
