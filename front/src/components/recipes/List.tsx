import * as React from 'react';

import { ListRenderItem, View } from 'react-native';
import SubmitBtn, { Spinner } from '../public/SubmitBtn';

import CardRecipe from '../public/CardRecipe';
import { FlatList } from 'react-native-gesture-handler';
import { RecipesScreenProps } from '../../navigations/MainNavigator';
import { formatRecipeDetails } from '../../external-api/edamam/formatRecipeDetail';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';
import { useRecipes } from '../../external-api/edamam/recipes';

const List: React.FC = () => {
  const { recipes, loading, more } = useRecipes();
  const navigation = useNavigation<RecipesScreenProps>();

  const navigateToDetail = (recipe: any): void => {
    navigation.navigate('DiscoveryDetail', formatRecipeDetails(recipe));
  };

  const renderItem: ListRenderItem<any> | null | undefined = ({ item }) => {
    return (
      <CardRecipe recipe={item} onPress={(): void => navigateToDetail(item)} />
    );
  };

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      numColumns={2}
      style={{ marginTop: globalStyles.space }}
      keyExtractor={(item): string => item.recipe.label}
      ListHeaderComponent={
        <View style={{ marginVertical: globalStyles.space }}>
          {loading && (
            <Spinner size="small" color={globalStyles.colors.primary} />
          )}
        </View>
      }
      ListFooterComponent={
        <View
          style={{
            marginVertical: globalStyles.space,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SubmitBtn title="Plus" loading={loading} onClick={more} />
        </View>
      }
    />
  );
};

export default List;
