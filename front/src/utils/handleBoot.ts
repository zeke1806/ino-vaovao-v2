import { FIRST_BOOT, TOKEN } from '../configs';
import AsyncStorage from '@react-native-community/async-storage';
import { SessionActions } from '../providers/session/session.context';
import { loadFontsAsync } from './loadFontsAsync';

export async function checkFirstUsage(): Promise<boolean> {
  let isFirstBoot = false;
  try {
    isFirstBoot = (await AsyncStorage.getItem(FIRST_BOOT)) === null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error reading asyncstorage first boot ', e);
  }
  return isFirstBoot;
}

export async function checkToken(): Promise<boolean> {
  let connected = false;
  try {
    connected = (await AsyncStorage.getItem(TOKEN)) !== null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error reading asyncstorage first boot ', e);
  }
  return connected;
}

export async function handleBoot(
  sessionDispatch: (action: SessionActions) => void,
): Promise<void> {
  await loadFontsAsync();

  if (!(await checkFirstUsage())) {
    sessionDispatch({ type: 'FIRST_USAGE' });
  }

  // verification si connecter ou pas (token)
  if (await checkToken()) {
    sessionDispatch({ type: 'CONNECT' });
  }

  sessionDispatch({ type: 'SET_READY' });
}
