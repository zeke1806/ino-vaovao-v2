import * as React from 'react';
import DiscussionList from '../components/discussion/discussion-list/DiscussionList';
import Header from '../components/discussion/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';
import Suggestion from '../components/discussion/suggestion/Suggestion';

const DiscussionScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header />
      <DiscussionList before={Suggestion} />
    </ScreenContainer>
  );
};

export default DiscussionScreen;
