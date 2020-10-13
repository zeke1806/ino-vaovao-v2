import * as React from 'react';
import CommonAvatar from './CommonAvatar';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

const GroupAvatar: React.FC = () => {
  const { space } = globalStyles;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
      }}
    >
      <CommonAvatar size="small" />
      <View style={{ marginLeft: -space * 2 }}>
        <CommonAvatar size="small" />
      </View>
    </View>
  );
};

export default GroupAvatar;
