import { HookResult, renderHook } from '@testing-library/react-hooks';
import { UseRegisterForm, useRegisterForm } from './useRegisterForm';
import { act } from 'react-test-renderer';

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
