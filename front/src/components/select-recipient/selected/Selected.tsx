import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import CommonAvatar from '../../public/CommonAvatar';
import { globalStyles } from '../../../styles/global';

const Selected: React.FC = () => {
  const renderItem: ListRenderItem<unknown> | null | undefined = () => (
    <CommonAvatar size="medium" name="ngia" />
  );
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

export default Selected;
