import { HookResult, act, renderHook } from '@testing-library/react-hooks';
import { UseFormLogin, useFormLogin } from './useFormLogin';
import { LoginInput } from '../../types';

function setLoginInput(
  result: HookResult<UseFormLogin>,
  value: LoginInput,
): void {
  act(() => {
    result.current.handleChangeLoginInput('username', value.username);
    result.current.handleChangeLoginInput('password', value.password);
  });
}

describe('useFormLogin', () => {
  describe('handleChangeLoginInput', () => {
    it('should change login input', () => {
      const { result } = renderHook(() => useFormLogin());
      const initialValue: LoginInput = {
        username: '',
        password: '',
      };
      const expectedValue: LoginInput = {
        username: 'text',
        password: 'text',
      };
      expect(result.current.loginInput).toEqual(initialValue);
      setLoginInput(result, expectedValue);
      expect(result.current.loginInput).toEqual(expectedValue);
    });
  });

  describe('resetFormLogin', () => {
    it('should reset login input', () => {
      const { result } = renderHook(() => useFormLogin());
      const initialValue: LoginInput = {
        username: 'text',
        password: 'text',
      };
      const expectedValue: LoginInput = {
        username: '',
        password: '',
      };
      setLoginInput(result, initialValue);
      expect(result.current.loginInput).toEqual(initialValue);
      act(() => {
        result.current.resetFormLogin();
      });
      expect(result.current.loginInput).toEqual(expectedValue);
    });
  });

  describe('isFormLoginValid', () => {
    it('should return true', () => {
      const { result } = renderHook(() => useFormLogin());
      const value: LoginInput = {
        username: 'user',
        password: 'user',
      };
      setLoginInput(result, value);
      expect(result.current.isFormLoginValid()).toBeTruthy();
    });

    it('should return false', () => {
      const { result } = renderHook(() => useFormLogin());
      const value: LoginInput = {
        username: '',
        password: 'user',
      };
      setLoginInput(result, value);
      expect(result.current.isFormLoginValid()).toBeFalsy();
    });
  });

  describe('_setFormLoginError', () => {
    it('should change the error state to true', () => {
      const { result } = renderHook(() => useFormLogin());
      expect(result.current.formLoginError).toBeFalsy();
      act(() => {
        result.current._setFormLoginError(true);
      });
      expect(result.current.formLoginError).toBeTruthy();
    });
  });
});
