import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Item from './Item';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';

interface DiscussionList {
  before?: React.FC<unknown>;
}

const DiscussionList: React.FC<DiscussionList> = ({ before: Before }) => {
  const renderItem: ListRenderItem<never> | null | undefined = () => (
    <Item view={false} />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data={[...Array(10)].map((_, i) => i)}
      renderItem={renderItem}
      // keyExtractor={}
      ListHeaderComponent={Before || null}
    />
  );
};

export default DiscussionList;
