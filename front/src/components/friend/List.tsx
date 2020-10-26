import * as React from 'react';
import * as flatListStyle from '../contact-navigator/listStyle';

import { ListRenderItem, View } from 'react-native';

import CommonAvatar from '../public/CommonAvatar';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'native-base';
import { globalStyles } from '../../styles/global';

const List: React.FC = () => {
  const renderItem: ListRenderItem<any> | null | undefined = () => {
    return (
      <View
        style={{
          marginTop: globalStyles.space,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CommonAvatar size="medium" />
        <Text>ngia beuh</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={[0, 1]}
      renderItem={renderItem}
      contentContainerStyle={flatListStyle.contentContainerStyle}
    />
  );
};

export default List;
