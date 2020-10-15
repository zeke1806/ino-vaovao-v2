import * as React from 'react';
import CardAnime from './CardAnime';
import CardRecipe from './CardRecipe';
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
      {categories.map((categ) => {
        switch (categ) {
          case 'recipe':
            return <CardRecipe key={categ} />;
          case 'anime':
            return <CardAnime key={categ} />;
        }
      })}
    </View>
  );
};

export default List;
