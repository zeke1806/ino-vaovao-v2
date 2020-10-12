import * as React from 'react';
import { Button, Text } from 'native-base';
import { globalStyles } from '../../styles/global';

const NextBtn: React.FC = () => {
  return (
    <Button transparent>
      <Text style={{ color: globalStyles.colors.tertiary }}>Suivant</Text>
    </Button>
  );
};

export default NextBtn;
