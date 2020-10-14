import * as React from 'react';
import { Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { DISCOVERY_CATEGORIES } from '../../../configs';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useDiscoveryState } from '../../../providers/discovery/discovery.consumer';

interface ItemProps {
  title: string;
  color: string;
}

const Item: React.FC<ItemProps> = ({ title, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: color,
        padding: globalStyles.space,
        borderRadius: globalStyles.space / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: globalStyles.space / 2,
        minWidth: globalStyles.space * 11,
      }}
    >
      <AntDesign
        name="close"
        size={globalStyles.iconSize}
        color="white"
        style={{ marginRight: globalStyles.space }}
      />
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: globalStyles.iconSize,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const List: React.FC = () => {
  const { categories } = useDiscoveryState();

  type R = ListRenderItem<DISCOVERY_CATEGORIES> | null | undefined;
  const renderItem: R = ({ item }) => (
    <Item title={item.toUpperCase()} color={'#000'} />
  );

  return (
    <FlatList
      contentContainerStyle={{
        marginTop: globalStyles.space / 2,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={categories}
    />
  );
};

export default List;
