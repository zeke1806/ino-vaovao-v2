import * as React from 'react';
import { Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { globalStyles } from '../../../styles/global';

const fakeData = [
  {
    title: 'Cuisine',
    color: globalStyles.colors.primary,
  },
  {
    title: 'Film',
    color: globalStyles.colors.secondary,
  },
];

interface ItemProps {
  title: string;
  color: string;
}

const Item: React.FC<ItemProps> = ({ title, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: color,
        padding: globalStyles.space,
        borderRadius: globalStyles.space / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: globalStyles.space / 2,
        minWidth: globalStyles.space * 11,
      }}
    >
      <AntDesign
        name="close"
        size={globalStyles.iconSize}
        color="white"
        style={{ marginRight: globalStyles.space }}
      />
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: globalStyles.iconSize,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const List: React.FC = () => {
  type R = ListRenderItem<{ title: string; color: string }> | null | undefined;
  const renderItem: R = ({ item }) => (
    <Item title={item.title} color={item.color} />
  );
  return (
    <FlatList
      contentContainerStyle={{
        marginTop: globalStyles.space / 2,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={fakeData}
    />
  );
};

export default List;
