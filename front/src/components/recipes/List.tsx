import * as React from 'react';

import { ListRenderItem, View } from 'react-native';

import CardRecipe from '../public/CardRecipe';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../../styles/global';
import { useRecipes } from '../../external-api/edamam/recipes';

const List: React.FC = () => {
  const { recipes, loading } = useRecipes();

  const renderItem: ListRenderItem<any> | null | undefined = ({ item }) => {
    return <CardRecipe recipe={item} />;
  };

  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        numColumns={2}
        style={{ marginTop: globalStyles.space }}
      />
    </View>
  );
};

export default List;
