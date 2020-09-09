import * as loadFontsAsyncModule from './loadFontsAsync';
import { checkFirstUsage, checkToken, handleBoot } from './handleBoot';
import AsyncStorage from '@react-native-community/async-storage';

describe('checkFirstUsage', () => {
  it('should be first usage', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue(null);
    const result = await checkFirstUsage();
    expect(result).toBeTruthy();
  });

  it('should not be first usage', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue('text');
    const result = await checkFirstUsage();
    expect(result).toBeFalsy();
  });
});

describe('checkToken', () => {
  it('should be connected', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue('connected');
    const result = await checkToken();
    expect(result).toBeTruthy();
  });

  it('should be disconnected', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue(null);
    const result = await checkToken();
    expect(result).toBeFalsy();
  });
});

describe('handleBoot', () => {
  describe('first usage and connected', () => {
    it('should dispatch FIRST_USAGE and CONNECT', async () => {
      jest
        .spyOn(loadFontsAsyncModule, 'loadFontsAsync')
        .mockImplementation(async () => {
          //
        });
      const sessionDispatchMock = jest.fn();
      const checkFirstUsageMock = jest.fn().mockResolvedValue(true);
      const checkTokenMock = jest.fn().mockResolvedValue(true);
      await handleBoot(
        sessionDispatchMock,
        checkFirstUsageMock,
        checkTokenMock,
      );
      expect(sessionDispatchMock).toHaveBeenCalledTimes(2);
    });
  });
});
