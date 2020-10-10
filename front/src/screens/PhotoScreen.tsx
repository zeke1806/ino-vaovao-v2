import * as React from 'react';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Header from '../components/photo/Header';
import { PhotoScreenNavigationProps } from '../navigations/ProfileNavigator';
import { StyleSheet } from 'react-native';
import Visualize from '../components/photo/Visualize';
import { globalStyles } from '../styles/global';

type PhotoScreenProps = PhotoScreenNavigationProps;

const PhotoScreen: React.FC<PhotoScreenProps> = ({ route }) => {
  const { uri, dimensions } = route.params.photo;

  return (
    <Container style={[styles.container, globalStyles.overlay]}>
      <Header />
      <Visualize
        uri={uri as string}
        dimensions={{
          width: (dimensions as Record<string, unknown>).width as number,
          height: (dimensions as Record<string, unknown>).height as number,
        }}
      />
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
