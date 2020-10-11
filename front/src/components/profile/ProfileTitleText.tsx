import * as React from 'react';
import { Text } from 'native-base';
import { globalStyles } from '../../styles/global';

const ProfileTitleText: React.FC<{
  text: string;
  size: number;
}> = ({ text, size }) => (
  <Text
    style={{
      color: globalStyles.colors.h2,
      fontWeight: 'bold',
      fontSize: size,
    }}
  >
    {text}
  </Text>
);

export default ProfileTitleText;
