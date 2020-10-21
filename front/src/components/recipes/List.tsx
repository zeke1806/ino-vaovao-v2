import * as React from 'react';

import { ListRenderItem, View } from 'react-native';
import SubmitBtn, { Spinner } from '../public/SubmitBtn';

import CardRecipe from '../public/CardRecipe';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../../styles/global';
import { useRecipes } from '../../external-api/edamam/recipes';

const List: React.FC = () => {
  const { recipes, loading, more } = useRecipes();

  const renderItem: ListRenderItem<any> | null | undefined = ({ item }) => {
    return <CardRecipe recipe={item} />;
  };

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      numColumns={2}
      style={{ marginTop: globalStyles.space }}
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
