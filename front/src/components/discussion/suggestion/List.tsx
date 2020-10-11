import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import SuggestionItem from './SuggestionItem';
import { View } from 'native-base';

const List: React.FC = () => {
  const renderItem: ListRenderItem<never> | null | undefined = () => (
    <SuggestionItem />
  );

  return (
    <View>
      <FlatList
        horizontal
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data={[...Array(5)].map((_, i) => i)}
        renderItem={renderItem}
        // keyExtractor={}
      />
    </View>
  );
};

export default List;
