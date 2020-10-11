import * as React from 'react';
import List from './List';
import Title from './Title';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Suggestion: React.FC = () => {
  return (
    <View style={{ marginTop: globalStyles.space }}>
      <Title />
      <List />
    </View>
  );
};

export default Suggestion;
