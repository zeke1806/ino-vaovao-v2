import * as React from 'react';
import { Button, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import StyledModal from '../../public/StyledModal';
import StyledModalCheckbox from '../../public/StyledModalCheckbox';
import { globalStyles } from '../../../styles/global';

const SelectGategory: React.FC = () => {
  const { colors, iconSize } = globalStyles;
  const [open, setOpen] = React.useState(false);

  const openDialog = (): void => setOpen(true);
  const closeDialog = (): void => setOpen(false);

  return (
    <View>
      <Button transparent onPress={openDialog}>
        <AntDesign name="select1" size={iconSize} color={colors.primary} />
      </Button>
      <StyledModal visible={open} onClose={closeDialog}>
        <Text>Choix des categories</Text>
        <StyledModalCheckbox
          title="Cuisine"
          value={false}
          onChange={(): void => {
            //
          }}
        />
        <StyledModalCheckbox
          title="Film"
          value={false}
          onChange={(): void => {
            //
          }}
        />
      </StyledModal>
    </View>
  );
};

export default SelectGategory;
