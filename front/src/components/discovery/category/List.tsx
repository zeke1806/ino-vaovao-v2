import * as React from 'react';

import { DISCOVERY_CATEGORIES } from '../../../configs';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useDiscoveryState } from '../../../providers/discovery/discovery.consumer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const randomColor = require('randomcolor');

const List: React.FC = () => {
  const { categories } = useDiscoveryState();

  type R = ListRenderItem<DISCOVERY_CATEGORIES> | null | undefined;
  const renderItem: R = ({ item }) => (
    <Item title={item} color={randomColor()} />
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
      keyExtractor={(item): string => item}
    />
  );
};

export default List;
