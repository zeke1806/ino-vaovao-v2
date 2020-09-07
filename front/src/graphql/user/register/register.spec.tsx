import * as React from 'react';
import {
  HookResult,
  WaitOptions,
  act,
  renderHook,
} from '@testing-library/react-hooks';
import {
  Keys,
  RegisterForm,
  UseRegisterForm,
  useRegister,
  useRegisterForm,
} from './register.service';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  describe('with correct input', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log');
    });

    it('should console log register complete', async () => {
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
      // eslint-disable-next-line no-console
      expect(console.log).toHaveBeenCalledWith('register complete');
    });
  });
});

describe('useRegisterForm custom hook', () => {
  const changeFormInput = (
    result: HookResult<UseRegisterForm>,
    username: string,
    password: string,
    validatePassword: string,
  ): void => {
    act(() => {
      result.current.handleChangeFormRegister('username', username);
      result.current.handleChangeFormRegister('password', password);
      result.current.handleChangeFormRegister(
        'validatePassword',
        validatePassword,
      );
    });

    expect(result.current.registerForm).toEqual({
      username,
      password,
      validatePassword,
    });
  };

  const expectRegisterFormToBeEmpty = (
    result: HookResult<UseRegisterForm>,
  ): void => {
    expect(result.current.registerForm).toEqual({
      username: '',
      password: '',
      validatePassword: '',
    });
  };

  describe('handleChangeFormRegister', () => {
    it('should change form input', () => {
      const { result } = renderHook(() => useRegisterForm());
      expectRegisterFormToBeEmpty(result);
      changeFormInput(result, 'user', 'userpass', 'userpass');
    });
  });

  describe('resetForm', () => {
    it('should rest form', () => {
      const { result } = renderHook(() => useRegisterForm());

      changeFormInput(result, 'user', 'userpass', 'userpass');

      act(() => {
        result.current.resetForm();
      });
      expectRegisterFormToBeEmpty(result);
      expect(result.current.errorFormRegister).toBeFalsy();
    });
  });

  describe('isFormOk', () => {
    it('should return true', () => {
      const { result } = renderHook(() => useRegisterForm());
      changeFormInput(result, 'user', 'userpass', 'userpass');
      expect(result.current.isFormOk()).toBeTruthy();
    });

    it('should return false and errorFormRegister should be true', () => {
      const { result } = renderHook(() => useRegisterForm());
      changeFormInput(result, 'user', 'userpass', 'userp');
      let isFormOk = true;
      act(() => {
        isFormOk = result.current.isFormOk();
      });
      expect(isFormOk).toBeFalsy();
      expect(result.current.errorFormRegister).toBeTruthy();
    });
  });
});
