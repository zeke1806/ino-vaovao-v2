import * as React from 'react';

import CommonAvatar from './CommonAvatar';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

interface Prop {
  img1Url?: string;
  img2Url?: string;
}

const GroupAvatar: React.FC<Prop> = ({ img1Url, img2Url }) => {
  const img1 = img1Url ? { uri: img1Url } : undefined;
  const img2 = img2Url ? { uri: img2Url } : undefined;
  const { space } = globalStyles;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
      }}
    >
      <CommonAvatar size="small" img={img1} />
      <View style={{ marginLeft: -space * 2 }}>
        <CommonAvatar size="small" img={img2} />
      </View>
    </View>
  );
};

export default GroupAvatar;
