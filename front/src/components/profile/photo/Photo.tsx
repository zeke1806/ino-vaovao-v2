import * as React from 'react';
import EditAccount from './EditAccount';
import EditProfile from './EditPhoto';
import Image from './Image';
import { PhotoProfile } from '../../../api/types';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

interface PhotoProps {
  username: string;
  photo: PhotoProfile | null | undefined;
}

const Photo: React.FC<PhotoProps> = ({ username, photo }) => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {photo ? <Image img={{ uri: photo.url }} /> : <Image />}
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
        <ProfileTitleText text={username} />
        <View style={{ marginLeft: 10 }}>
          <EditAccount />
        </View>
      </View>
    </View>
  );
};

export default Photo;
