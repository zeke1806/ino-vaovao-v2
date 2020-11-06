import * as React from 'react';

import { Button, CheckBox, Text } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import NameInput from '../../login/NameInput';
import PasswordInput from '../../login/PasswordInput';
import StyledModal from '../../public/StyledModal';
import StyledModalCheckbox from '../../public/StyledModalCheckbox';
import SubmitBtn from '../../public/SubmitBtn';
import VerticalFormSpace from '../../public/VerticalFormSpace';
import { View } from 'react-native';
import { globalStyles } from '../../../styles/global';
import { useUpdateAccount } from '../../../api/user/update-account/updateAccount.service';

const EditAccount: React.FC = () => {
  const {
    state,
    handleChange,
    handleCloseModal,
    handleOpenModal,
    handleSubmit,
    loading,
  } = useUpdateAccount('', '', false);

  return (
    <View>
      <Button transparent onPress={handleOpenModal}>
        <MaterialIcons
          name="update"
          size={globalStyles.iconSize}
          color={globalStyles.colors.primary}
        />
      </Button>

      <StyledModal visible={state.modal} onClose={handleCloseModal}>
        <Text>Modifier votre profile</Text>
        <NameInput
          value={state.name}
          error={false}
          onChange={(value: string): void => {
            handleChange('name', value);
          }}
        />

        <VerticalFormSpace />

        <PasswordInput
          value={state.password}
          error={false}
          onChange={(value: string): void => {
            handleChange('password', value);
          }}
        />

        <VerticalFormSpace />

        {/* <StyledModalCheckbox
          title="Status connecter"
          value={state.statusConnected}
          onChange={(): void => {
            handleChange('statusConnected', !state.statusConnected);
          }}
        /> */}

        <VerticalFormSpace />
        <VerticalFormSpace />

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <SubmitBtn
              title="Modifier"
              loading={loading}
              onClick={handleSubmit}
            />
          </View>
        </View>
      </StyledModal>
    </View>
  );
};

export default EditAccount;
