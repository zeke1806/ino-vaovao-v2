import * as React from 'react';
import {
  HookResult,
  WaitOptions,
  act,
  renderHook,
} from '@testing-library/react-hooks';
import { Keys, RegisterForm, useRegister } from './register.service';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { REGISTER } from './register.gql';
import { User } from '../../types';

// :: DATA ::
const user: User = {
  __typename: 'User',
  id: '1',
  username: 'user',
};

// :: MOCKS ::
const registerMutationMocks = {
  request: {
    query: REGISTER,
    variables: {
      registerInput: {
        username: 'user',
        password: 'userpass',
      },
    },
  },
  result: {
    data: {
      register: {
        ...user,
      },
    },
  },
};

interface Results {
  result: HookResult<{
    registerForm: RegisterForm;
    submitRegister: () => void;
    loadingRegister: boolean;
    errorFormRegister: boolean;
    handleChangeFormRegister: (key: Keys, value: string) => void;
  }>;
  waitForNextUpdate: (
    options?: Pick<WaitOptions, 'timeout'> | undefined,
  ) => Promise<void>;
}

function getHookWrapper(mocks: MockedResponse[]): Results {
  const wrapper: React.FC<any> = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );

  const { result, waitForNextUpdate } = renderHook(() => useRegister(), {
    wrapper,
  });

  expect(result.current.errorFormRegister).toBeFalsy();
  expect(result.current.loadingRegister).toBeFalsy();
  expect(result.current.registerForm).toEqual({
    username: '',
    password: '',
    validatePassword: '',
  });

  return { result, waitForNextUpdate };
}

describe('useRegister custom hook', () => {
  describe('with incorrect input', () => {
    it('should produce an error on form', async () => {
      const { result } = getHookWrapper([registerMutationMocks]);
      act(() => {
        result.current.submitRegister();
      });

      expect(result.current.errorFormRegister).toBeTruthy();
    });
  });

  describe('with correct input', () => {
    it('should reset the form on complete mutation', async () => {
      const { result, waitForNextUpdate } = getHookWrapper([
        registerMutationMocks,
      ]);

      act(() => {
        result.current.handleChangeFormRegister('username', 'user');
        result.current.handleChangeFormRegister('password', 'userpass');
        result.current.handleChangeFormRegister('validatePassword', 'userpass');
      });
      act(() => {
        result.current.submitRegister();
      });

      expect(result.current.loadingRegister).toBeTruthy();

      await act(async () => {
        await waitForNextUpdate();
      });

      expect(result.current.loadingRegister).toBeFalsy();
      expect(result.current.registerForm).toEqual({
        username: '',
        password: '',
        validatePassword: '',
      });
    });
  });
});
