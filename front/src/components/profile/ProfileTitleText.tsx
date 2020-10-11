import * as React from 'react';
import Title from '../public/Titles';

const ProfileTitleText: React.FC<{
  text: string;
}> = ({ text }) => <Title text={text} type="h2" />;

export default ProfileTitleText;
