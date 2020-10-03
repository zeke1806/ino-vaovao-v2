import * as React from 'react';
import { Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import StyledModal from '../../public/StyledModal';
import { View } from 'react-native';
import { globalStyles } from '../../../styles/global';

const EditAccount: React.FC = () => {
  return (
    <View>
      <Button
        transparent
        onPress={(): void => {
          //
        }}
      >
        <MaterialIcons
          name="update"
          size={globalStyles.iconSize}
          color={globalStyles.colors.primary}
        />
      </Button>

      <StyledModal visible={false}></StyledModal>
    </View>
  );
};

export default EditAccount;
