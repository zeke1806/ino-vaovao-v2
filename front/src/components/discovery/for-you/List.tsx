import * as React from 'react';

import CardAnime from './CardAnime';
import CardRecipe from '../../public/CardRecipe';
import { HomeNavigatorProps } from '../../../navigations/MainNavigator';
import { View } from 'native-base';
import { useDiscoveryState } from '../../../providers/discovery/discovery.consumer';
import { useNavigation } from '@react-navigation/core';
import { useRandomRecipie } from '../../../external-api/edamam/randomRecipe';

const List: React.FC = () => {
  const { categories } = useDiscoveryState();
  const { loading, recipe } = useRandomRecipie();
  const navigation = useNavigation<HomeNavigatorProps>();

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
            return (
              <CardRecipe
                key={categ}
                recipe={recipe}
                onPress={(): void =>
                  navigation.navigate('RecipesScreen', { type: 'recipe' })
                }
              />
            );
          case 'anime':
            return <CardAnime key={categ} />;
        }
      })}
    </View>
  );
};

export default List;
