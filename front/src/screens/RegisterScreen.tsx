import * as React from 'react';
import { Container, H2 } from 'native-base';
import { screenHeight, screenWidth } from '../utils/Styles';
import RegisterForm from '../components/register/RegisterForm';
import { StyleSheet } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <H2 style={styles.title}>Inscription</H2>
      <RegisterForm />
    </Container>
  );
};

const spaceY = (screenHeight * 7) / 100;
const spaceX = (screenWidth * 10) / 100;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spaceX,
  },

  title: {
    marginBottom: spaceY,
  },
});

export default RegisterScreen;
