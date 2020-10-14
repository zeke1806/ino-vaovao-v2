import * as React from 'react';
import { Text, View } from 'native-base';
import CardRecipe from './CardRecipe';
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
          case 'movie':
            return <Text>movie categorie</Text>;
        }
      })}
    </View>
  );
};

export default List;
