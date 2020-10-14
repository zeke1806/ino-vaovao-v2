import * as React from 'react';
import { Button, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { DISCOVERY_CATEGORIES } from '../../../configs';
import { globalStyles } from '../../../styles/global';
import { useDiscoveryDispatch } from '../../../providers/discovery/discovery.consumer';

interface ItemProps {
  title: DISCOVERY_CATEGORIES;
  color: string;
}

const Item: React.FC<ItemProps> = ({ title, color }) => {
  const discoveryDispatch = useDiscoveryDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: color,
        paddingHorizontal: globalStyles.space,
        borderRadius: globalStyles.space / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: globalStyles.space / 2,
        minWidth: globalStyles.space * 11,
      }}
    >
      <Button
        transparent
        onPress={(): void => {
          discoveryDispatch({ type: 'TOOGLE', category: title });
        }}
      >
        <AntDesign
          name="close"
          size={globalStyles.iconSize}
          color="white"
          style={{ marginRight: globalStyles.space }}
        />
      </Button>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: globalStyles.iconSize,
        }}
      >
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default Item;
