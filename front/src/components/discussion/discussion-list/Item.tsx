import * as React from 'react';
import { Text, View } from 'native-base';
import CommonAvatar from '../../public/CommonAvatar';
import IndicatorBadge from '../../public/IndicatorBadge';
import { globalStyles } from '../../../styles/global';

interface ItemProps {
  view: boolean;
}

const Item: React.FC<ItemProps> = ({ view }) => {
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
        <Text style={{ color: '#3F3F3F' }}>Name</Text>
        {view ? (
          <Text>Message</Text>
        ) : (
          <Text style={{ fontWeight: 'bold' }}>Message</Text>
        )}
      </View>

      <View
        style={{
          justifyContent: 'center',
        }}
      >
        {!view && <IndicatorBadge color="grey" />}
      </View>
    </View>
  );
};

export default Item;
