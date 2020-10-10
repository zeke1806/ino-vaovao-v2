import * as React from 'react';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';

const ScreenContainer: React.FC = ({ children }) => (
  <Container style={styles.container}>{children}</Container>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: globalStyles.screenHorizontalPadding,
  },
});

export default ScreenContainer;
