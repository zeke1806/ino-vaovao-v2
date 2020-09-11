import { act, renderHook } from '@testing-library/react-hooks';
import { Alert } from 'react-native';
import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';
import { LoginData } from './login.gql';
import { handleOnCompletedLogin } from './login.service';

describe('handleOnCompletedLogin', () => {
  const sessionDispatchMock = jest.fn();
  const resetFormMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect', async () => {
    const dataMock: LoginData = {
      login: {
        __typename: 'LoginToken',
        token: 'token',
      },
    };
    await handleOnCompletedLogin(dataMock, sessionDispatchMock, resetFormMock);
    expect(AsyncStorageMock.setItem).toHaveBeenCalled();
    expect(sessionDispatchMock).toHaveBeenCalled();
    expect(resetFormMock).toHaveBeenCalled();
  });

  it('should alert info connection not correct', async () => {
    const spy = jest.spyOn(Alert, 'alert');
    const dataMock: LoginData = {
      login: {
        __typename: 'LoginError',
        incorrectInfo: 'incorrectInfo',
      },
    };
    await handleOnCompletedLogin(dataMock, sessionDispatchMock, resetFormMock);
    expect(AsyncStorageMock.setItem).not.toHaveBeenCalled();
    expect(sessionDispatchMock).not.toHaveBeenCalled();
    expect(resetFormMock).not.toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });
});
