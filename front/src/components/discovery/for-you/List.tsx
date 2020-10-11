import * as React from 'react';
import CardCategory from './CardCategory';
import { View } from 'native-base';

const List: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {[...Array(5)].map((_, i) => (
        <CardCategory key={i} />
      ))}
    </View>
  );
};

export default List;
