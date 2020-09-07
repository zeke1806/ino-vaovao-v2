import * as React from 'react';
import { Button, Container, H2, Text, Thumbnail } from 'native-base';
import { CHECK } from '../utils/Icons';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { screenHeight } from '../utils/Styles';

const SuccessRegisterScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Thumbnail source={CHECK} style={styles.img} />
      <H2 style={styles.title1}>Votre inscription est {'\n'} un succes</H2>
      <Text>Vous pouvez desormais echangez avec vos amis</Text>
      <Button transparent style={{ alignSelf: 'center' }}>
        <Text style={styles.btnText}>Connectez-vous</Text>
      </Button>
    </Container>
  );
};

const spaceY = (screenHeight * 5) / 100;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title1: {
    textAlign: 'center',
    color: globalStyles.colors.text1,
    marginTop: spaceY * 2,
    marginBottom: spaceY,
  },

  btnText: {
    color: globalStyles.colors.primary,
    fontWeight: 'bold',
  },

  img: {
    width: (screenHeight * 35) / 100,
    height: (screenHeight * 35) / 100,
  },
});

export default SuccessRegisterScreen;
