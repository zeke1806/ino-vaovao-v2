import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import SuggestionItem from './SuggestionItem';

const List: React.FC = () => {
  const renderItem: ListRenderItem<never> | null | undefined = () => (
    <SuggestionItem />
  );

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data={[...Array(10)].map((_, i) => i)}
      renderItem={renderItem}
      // keyExtractor={}
    />
  );
};

export default List;
