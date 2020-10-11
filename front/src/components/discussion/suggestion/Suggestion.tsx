import * as React from 'react';
import List from './List';
import Title from './Title';
import { View } from 'native-base';

const Suggestion: React.FC = () => {
  return (
    <View>
      <Title />
      <List />
    </View>
  );
};

export default Suggestion;
