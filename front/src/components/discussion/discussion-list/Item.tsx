import * as React from 'react';
import CommonAvatar from '../../public/CommonAvatar';
import { Text, View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Item: React.FC = () => {
  const space = globalStyles.space;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: space / 3,
          paddingHorizontal: space,
          marginVertical: space / 2,
          borderRadius: 100,
        },
        globalStyles.elevation,
      ]}
    >
      <CommonAvatar size="medium" />
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          paddingLeft: globalStyles.space,
        }}
      >
        <Text>Name</Text>
        <Text>Message</Text>
      </View>
    </View>
  );
};

export default Item;
