import * as React from 'react';
import { Button, H2, Input, Item, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { screenHeight } from '../../utils/Styles';

const RegisterForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <H2 style={styles.title}>Inscription</H2>

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
          <Text>Inscription</Text>
        </Button>
      </View>
    </View>
  );
};

const space = (screenHeight * 7) / 100;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  title: {
    marginBottom: space,
  },

  btnContainer: {
    alignItems: 'center',
    marginTop: space,
  },

  submitBtn: {
    backgroundColor: '#E8808C',
  },

  marginRight: {
    marginRight: 15,
  },
});

export default RegisterForm;
