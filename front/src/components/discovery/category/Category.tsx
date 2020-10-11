import * as React from 'react';
import List from './List';
import Titles from '../../public/Titles';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Category: React.FC = () => {
  return (
    <View style={{ marginTop: globalStyles.space }}>
      <Titles text="Categories" type="h2" />
      <List />
    </View>
  );
};

export default Category;
