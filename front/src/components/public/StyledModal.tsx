import * as React from 'react';
import { Alert, Modal, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

export interface StyledModalProps {
  visible: boolean;
}

const StyledModal: React.FC<StyledModalProps> = ({ visible, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={(): void => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AntDesign
            name="close"
            size={globalStyles.iconSize}
            color={globalStyles.colors.icon}
            style={{ position: 'absolute', right: 10, top: 10 }}
          />
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default StyledModal;
