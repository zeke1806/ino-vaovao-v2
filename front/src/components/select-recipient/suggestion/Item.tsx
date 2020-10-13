import * as React from 'react';
import { Radio, Text, View } from 'native-base';
import CommonAvatar from '../../public/CommonAvatar';
import { globalStyles } from '../../../styles/global';

const Item: React.FC = () => {
  const space = globalStyles.space;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: space / 2,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <CommonAvatar size="medium" />
        <Text>ngia</Text>
      </View>
      <Radio selected={true} selectedColor={globalStyles.colors.secondary} />
    </View>
  );
};

export default Item;
