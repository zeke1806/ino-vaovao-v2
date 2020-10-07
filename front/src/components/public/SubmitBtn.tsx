import * as React from 'react';
import { Button, Text, View } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';

export const Spinner: React.FC<{
  color: string | undefined;
  size: number | 'small' | 'large' | undefined;
}> = ({ color, size }) => <ActivityIndicator color={color} size={size} />;

export interface SubmitBtnProps {
  loading: boolean;
  title: string;
  onClick: () => void;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ loading, title, onClick }) => (
  <Button
    rounded
    style={{ backgroundColor: globalStyles.colors.primary }}
    onPress={onClick}
  >
    <Text>{title}</Text>
    {loading && (
      <View style={{ marginHorizontal: 10 }}>
        <Spinner color="white" size="small" />
      </View>
    )}
  </Button>
);

export default SubmitBtn;
