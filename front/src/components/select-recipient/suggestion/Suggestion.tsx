import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import Item from './Item';
import { globalStyles } from '../../../styles/global';

const Suggestion: React.FC = () => {
  const renderItem: ListRenderItem<unknown> | null | undefined = () => <Item />;
  return <FlatList data={[1, 2]} renderItem={renderItem} />;
};

export default Suggestion;
