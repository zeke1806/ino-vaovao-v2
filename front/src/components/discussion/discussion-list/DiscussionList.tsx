import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';

const DiscussionList: React.FC = () => {
  const renderItem: ListRenderItem<never> | null | undefined = () => <Item />;

  return (
    <FlatList
      contentContainerStyle={{ marginTop: globalStyles.space }}
      showsVerticalScrollIndicator={false}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data={[...Array(10)].map((_, i) => i)}
      renderItem={renderItem}
      // keyExtractor={}
    />
  );
};

export default DiscussionList;
