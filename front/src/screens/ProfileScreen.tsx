import * as React from 'react';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Header from '../components/profile/header/Header';
import Info from '../components/profile/info/Info';
import Photo from '../components/profile/photo/Photo';
import { StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Header />
      <Photo />
      <Info />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default ProfileScreen;
