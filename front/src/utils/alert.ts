import { Alert } from 'react-native';

export function alert(title: string, content: string, btnText: string): void {
  Alert.alert(
    title,
    content,
    [
      {
        text: btnText,
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
}
