import * as React from 'react';
import { Container, Text, View } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/photo/Header';
import { PhotoScreenNavigationProps } from '../navigations/ProfileNavigator';
import SubmitBtn from '../components/public/SubmitBtn';
import { globalStyles } from '../styles/global';

type PhotoScreenProps = PhotoScreenNavigationProps;

const PhotoScreen: React.FC<PhotoScreenProps> = ({ route }) => {
  const { uri, dimensions } = route.params.photo;

  return (
    <Container style={[styles.container, globalStyles.overlay]}>
      <Header />
      <View
        style={{
          position: 'relative',
          flex: 1,
          margin: globalStyles.screenHorizontalPadding,
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: uri as string }}
          style={{
            flex: 0.7,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <SubmitBtn
            title="Actuel"
            onClick={(): void => {
              //
            }}
            loading={false}
          />
          <Text style={{ color: 'white' }}>
            {(dimensions as Record<string, unknown>).width} X{' '}
            {(dimensions as Record<string, unknown>).height}
          </Text>
        </View>
      </View>
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
