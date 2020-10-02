import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Gallery from '../components/profile/gallery/Gallery';
import Header from '../components/profile/header/Header';
import Info from '../components/profile/info/Info';
import Photo from '../components/profile/photo/Photo';

const ProfileScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <ScrollView>
        <Header />
        <Photo />
        <Info />
        <Gallery />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default ProfileScreen;
