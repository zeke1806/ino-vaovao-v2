import * as React from 'react';
import { Container, H2 } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import { screenHeight, screenWidth } from '../utils/Styles';
import Constants from 'expo-constants';
import RegisterFormCtn from '../components/register/RegisterForm.ctn';

const RegisterScreen: React.FC = () => {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <H2 style={styles.title}>Inscription</H2>
        <RegisterFormCtn />
      </Container>
    </ScrollView>
  );
};

const spaceY = (screenHeight * 7) / 100;
const spaceX = (screenWidth * 10) / 100;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spaceX,
    paddingTop: Constants.statusBarHeight,
  },

  title: {
    marginBottom: spaceY,
  },
});

export default RegisterScreen;
