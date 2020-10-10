import * as React from 'react';
import * as sessionConsumerModule from '../../../providers/session/session.consumer';
import { LOGIN, LoginData } from './login.gql';
import { LoginInput, MutationLoginArgs } from '../../types';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { act, renderHook } from '@testing-library/react-hooks';
import { handleOnCompletedLogin, useLogin } from './login.service';
import { Alert } from 'react-native';
import { ApolloClient } from '@apollo/client';
import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';

describe('handleOnCompletedLogin', () => {
  const sessionDispatchMock = jest.fn();
  const resetFormMock = jest.fn();
  const apolloMock = {
    resetStore: jest.fn(),
  };

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
    await handleOnCompletedLogin(
      dataMock,
      sessionDispatchMock,
      resetFormMock,
      (apolloMock as unknown) as ApolloClient<unknown>,
    );
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
    await handleOnCompletedLogin(
      dataMock,
      sessionDispatchMock,
      resetFormMock,
      (apolloMock as unknown) as ApolloClient<unknown>,
    );
    expect(AsyncStorageMock.setItem).not.toHaveBeenCalled();
    expect(sessionDispatchMock).not.toHaveBeenCalled();
    expect(resetFormMock).not.toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });
});

// :: MOCKS ::
const loginVarsMock: MutationLoginArgs = {
  loginInput: {
    username: 'user',
    password: 'user',
  },
};
const loginResMock: LoginData = {
  login: {
    __typename: 'LoginToken',
    token: 'token',
  },
};
const loginMutationMocks = {
  request: {
    query: LOGIN,
    variables: loginVarsMock,
  },
  result: {
    data: loginResMock,
  },
};

function generateWrapper(mocks: MockedResponse[]): React.FC<any> {
  const wrapper: React.FC<any> = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
  return wrapper;
}

describe('useLogin', () => {
  it('should call _handleOnCompletedLogin on completed', async () => {
    jest
      .spyOn(sessionConsumerModule, 'useSessionDispatch')
      .mockImplementation(jest.fn(() => jest.fn()));
    const _handleOnCompletedLogin = jest.fn();

    const { result, waitForNextUpdate } = renderHook(
      () => useLogin(_handleOnCompletedLogin),
      {
        wrapper: generateWrapper([loginMutationMocks]),
      },
    );

    act(() => {
      result.current.handleChangeLoginInput('username', 'user');
      result.current.handleChangeLoginInput('password', 'user');
    });
    act(() => {
      result.current.submitLogin();
    });
    await act(async () => {
      await waitForNextUpdate();
    });

    expect(_handleOnCompletedLogin).toHaveBeenCalled();
  });

  it('should set formLoginError to true', async () => {
    jest
      .spyOn(sessionConsumerModule, 'useSessionDispatch')
      .mockImplementation(jest.fn(() => jest.fn()));

    const _handleOnCompletedLogin = jest.fn();
    const { result } = renderHook(() => useLogin(_handleOnCompletedLogin), {
      wrapper: generateWrapper([loginMutationMocks]),
    });

    expect(result.current.formLoginError).toBeFalsy();
    expect(result.current.loginInput).toEqual({
      username: '',
      password: '',
    } as LoginInput);

    act(() => {
      result.current.submitLogin();
    });

    expect(result.current.formLoginError).toBeTruthy();
  });
});
