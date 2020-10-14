import * as React from 'react';
import { DISCOVERY_CATEGORIES } from '../../../configs';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useDiscoveryState } from '../../../providers/discovery/discovery.consumer';

const List: React.FC = () => {
  const { categories } = useDiscoveryState();

  type R = ListRenderItem<DISCOVERY_CATEGORIES> | null | undefined;
  const renderItem: R = ({ item }) => <Item title={item} color={'#000'} />;

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
