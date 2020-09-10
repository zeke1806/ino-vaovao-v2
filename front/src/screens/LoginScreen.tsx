import * as React from 'react';
import { Container, H2 } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import { screenHeight, screenWidth } from '../utils/Styles';
import Constants from 'expo-constants';
import LoginFormCtn from '../components/login/LoginForm.ctn';

const LoginScreen: React.FC = () => {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <H2 style={styles.title}>Connexion</H2>
        <LoginFormCtn />
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

export default LoginScreen;
