import * as React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import Item from './Item';
import { globalStyles } from '../../../styles/global';

const SelectedList: React.FC = () => {
  const renderItem: ListRenderItem<unknown> | null | undefined = () => <Item />;
  return (
    <View>
      <FlatList
        horizontal
        contentContainerStyle={{
          marginTop: globalStyles.space,
        }}
        data={[1, 2]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SelectedList;
