import * as React from 'react';
import { Text } from 'react-native';

export interface Props {
  text: string;
}

const RegisterScreen: React.FC<Props> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default RegisterScreen;
