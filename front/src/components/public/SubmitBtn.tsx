import * as React from 'react';

import { Button, Text, View } from 'native-base';

import { ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';

export const Spinner: React.FC<{
  color?: string;
  size?: number | 'small' | 'large';
}> = ({ color, size }) => <ActivityIndicator color={color} size={size} />;

export interface SubmitBtnProps {
  loading: boolean;
  title: string;
  onClick: () => void;
  btnColor?: string;
  spinnerColor?: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  loading,
  title,
  onClick,
  btnColor,
  spinnerColor,
}) => (
  <Button
    rounded
    style={{ backgroundColor: btnColor || globalStyles.colors.primary }}
    onPress={onClick}
  >
    <Text>{title}</Text>
    {loading && (
      <View style={{ marginHorizontal: 10 }}>
        <Spinner color={spinnerColor || 'white'} size="small" />
      </View>
    )}
  </Button>
);

export default SubmitBtn;
