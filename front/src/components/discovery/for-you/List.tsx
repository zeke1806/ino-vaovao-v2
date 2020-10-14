import * as React from 'react';
import CardCategory from './CardCategory';
import { View } from 'native-base';
import { useDiscoveryState } from '../../../providers/discovery/discovery.consumer';

const List: React.FC = () => {
  const { categories } = useDiscoveryState();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {categories.map((_, i) => (
        <CardCategory key={i} />
      ))}
    </View>
  );
};

export default List;
