import * as React from 'react';
import { Text, View } from 'native-base';
import CommonAvatar from '../public/CommonAvatar';
import { globalStyles } from '../../styles/global';

const Member: React.FC = () => {
  const { space } = globalStyles;
  return (
    <View style={{ alignItems: 'center' }}>
      {[1, 2].map((_, i) => (
        <View
          key={i}
          style={{
            width: '80%',
            flexDirection: 'row',
            marginVertical: space,
            alignItems: 'center',
          }}
        >
          <CommonAvatar size="medium" />
          <Text style={{ marginLeft: space }}>agnaragna</Text>
        </View>
      ))}
    </View>
  );
};

export default Member;
