import * as React from 'react';
import Titles from '../../public/Titles';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const ForYou: React.FC = () => {
  return (
    <View style={{ marginTop: globalStyles.space / 2 }}>
      <Titles text="Pour vous" type="h2" />
    </View>
  );
};

export default ForYou;
