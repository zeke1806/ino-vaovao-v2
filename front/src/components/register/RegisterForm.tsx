import * as React from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { screenHeight } from '../../utils/Styles';

const RegisterForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Item>
        <AntDesign
          name="smileo"
          size={24}
          color={globalStyles.iconColor.color}
          style={styles.marginRight}
        />
        <Input placeholder="Nom" />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item>
        <AntDesign
          name="lock"
          size={24}
          color={globalStyles.iconColor.color}
          style={styles.marginRight}
        />
        <Input placeholder="Mot de passe" />
        <AntDesign name="eye" size={24} color={globalStyles.iconColor.color} />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item>
        <AntDesign
          name="lock"
          size={24}
          color={globalStyles.iconColor.color}
          style={styles.marginRight}
        />
        <Input placeholder="Valider votre mot de passe" />
      </Item>

      <View style={styles.btnContainer}>
        <Button rounded style={styles.submitBtn}>
          <Text>S&apos;inscrire</Text>
        </Button>
      </View>
    </View>
  );
};

const spaceY = (screenHeight * 7) / 100;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  btnContainer: {
    alignItems: 'center',
    marginTop: spaceY * 2,
  },

  submitBtn: {
    backgroundColor: '#E8808C',
  },

  marginRight: {
    marginRight: 15,
  },
});

export default RegisterForm;
