import * as React from 'react';

import { Button, Thumbnail } from 'native-base';

import { BACK_ARROW } from '../../utils/Icons';
import { useNavigation } from '@react-navigation/core';

const BackBtn: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Button transparent onPress={goBack}>
      <Thumbnail
        source={BACK_ARROW}
        style={{
          height: 45,
          width: 45,
        }}
      />
    </Button>
  );
};

export default BackBtn;
