import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Container } from 'native-base';
import Gallery from '../components/profile/gallery/Gallery';
import Header from '../components/profile/header/Header';
import Info from '../components/profile/info/Info';
import Photo from '../components/profile/photo/Photo';
import Spinner from 'react-native-loading-spinner-overlay';
import { useMe } from '../graphql/user/me/me.service';

const ProfileScreen: React.FC = () => {
  const { meLoading, meData } = useMe();

  return (
    <Container style={styles.container}>
      <Spinner visible={meLoading} />
      <ScrollView>
        <Header />
        {meData && (
          <>
            <Photo
              username={meData.me.username}
              photo={meData.me.currentPhoto}
            />
            <Info statusConnected={meData.me.statusConnected} />
            <Gallery photos={meData.me.photos} />
          </>
        )}
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
