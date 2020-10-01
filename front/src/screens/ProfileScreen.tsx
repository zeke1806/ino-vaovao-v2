import * as React from 'react';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Header from '../components/profile/header/Header';
import { StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Header />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default ProfileScreen;
