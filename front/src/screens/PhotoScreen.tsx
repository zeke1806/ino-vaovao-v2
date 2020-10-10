import * as React from 'react';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Header from '../components/photo/Header';
import { PhotoScreenNavigationProps } from '../navigations/ProfileNavigator';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

type PhotoScreenProps = PhotoScreenNavigationProps;

const PhotoScreen: React.FC<PhotoScreenProps> = ({ navigation, route }) => {
  return (
    <Container style={[styles.container, globalStyles.overlay]}>
      <Header />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default PhotoScreen;
