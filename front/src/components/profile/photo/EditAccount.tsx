import * as React from 'react';
import { Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../../styles/global';

const EditAccount: React.FC = () => {
  return (
    <Button transparent>
      <MaterialIcons
        name="update"
        size={globalStyles.iconSize}
        color={globalStyles.colors.primary}
      />
    </Button>
  );
};

export default EditAccount;
