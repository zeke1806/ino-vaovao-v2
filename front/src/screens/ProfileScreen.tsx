import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import Gallery from '../components/profile/gallery/Gallery';
import Header from '../components/public/header/Header';
import Info from '../components/profile/info/Info';
import Logout from '../components/profile/header/Logout';
import Photo from '../components/profile/photo/Photo';
import ScreenContainer from '../components/public/ScreenContainer';
import { ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useMe } from '../api/user/me/me.service';

const ProfileScreen: React.FC = () => {
  const { meLoading, meData } = useMe();

  return (
    <ScreenContainer>
      <Spinner visible={meLoading} />
      <ScrollView>
        <Header left={<BackBtn />} title="Profile" right={<Logout />} />
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
    </ScreenContainer>
  );
};

export default ProfileScreen;
