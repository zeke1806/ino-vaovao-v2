import * as React from 'react';
import { Text } from 'native-base';

const ProfileTitleText: React.FC<{
  text: string;
  size: number;
}> = ({ text, size }) => (
  <Text
    style={{
      color: '#44597C',
      fontWeight: 'bold',
      fontSize: size,
    }}
  >
    {text}
  </Text>
);

export default ProfileTitleText;
