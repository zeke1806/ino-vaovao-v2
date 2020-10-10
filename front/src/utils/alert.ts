import { Alert } from 'react-native';

export function alert(
  title: string,
  content: string,
  btnText: string,
  style: 'cancel' | 'default' | 'destructive' | undefined,
  cb?: () => void,
): void {
  Alert.alert(
    title,
    content,
    [
      {
        text: btnText,
        style,
        onPress: cb,
      },
    ],
    { cancelable: false },
  );
}
