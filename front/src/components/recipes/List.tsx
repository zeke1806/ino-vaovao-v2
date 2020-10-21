import * as React from 'react';

import { Text, View } from 'native-base';

import CardRecipe from '../public/CardRecipe';
import { FlatList } from 'react-native-gesture-handler';
import { HomeScreenProps } from '../../navigations/MainNavigator';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';
import { useRandomRecipie } from '../../external-api/edamam/randomRecipe';

const List: React.FC = () => {
  const { loading, recipe } = useRandomRecipie();
  const navigation = useNavigation<HomeScreenProps>();

  const renderItem: ListRenderItem<any> | null | undefined = () => (
    <CardRecipe recipe={recipe} />
  );

  return (
    <FlatList
      data={[1, 2]}
      renderItem={renderItem}
      numColumns={2}
      style={{ marginTop: globalStyles.space }}
    />
  );
};

export default List;
