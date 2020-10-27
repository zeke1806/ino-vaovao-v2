import * as React from 'react';

import DiscussionList from '../components/discussion/discussion-list/DiscussionList';
import Header from '../components/discussion/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';
import Spinner from 'react-native-loading-spinner-overlay';
import Suggestion from '../components/discussion/suggestion/Suggestion';
import { useMe } from '../api/user/me/me.service';

const DiscussionScreen: React.FC = () => {
  const { meLoading } = useMe();
  return (
    <ScreenContainer>
      <Spinner visible={meLoading} />
      <Header />
      <DiscussionList before={Suggestion} />
    </ScreenContainer>
  );
};

export default DiscussionScreen;
