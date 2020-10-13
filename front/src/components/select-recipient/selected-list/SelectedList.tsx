import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import CommonAvatar from '../../public/CommonAvatar';
import Item from './Item';
import { globalStyles } from '../../../styles/global';

const SelectedList: React.FC = () => {
  const renderItem: ListRenderItem<unknown> | null | undefined = () => <Item />;
  return (
    <FlatList
      horizontal
      contentContainerStyle={{
        marginTop: globalStyles.space,
      }}
      data={[1, 2]}
      renderItem={renderItem}
    />
  );
};

export default SelectedList;
