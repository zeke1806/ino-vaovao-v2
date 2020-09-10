import * as React from 'react';
import RegisterForm, {
  RegisterFormInput,
  RegisterFormProps,
} from './RegisterForm';
import { fireEvent, render } from '@testing-library/react-native';

// eslint-disable-next-line no-console
console.error = jest.fn();

function renderComponent(): {
  registerFormProps: RegisterFormProps;
  getByTestId: any;
} {
  const registerFormProps: RegisterFormProps = {
    formInput: ({} as unknown) as RegisterFormInput,
    error: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    loading: false,
    navigateToLogin: jest.fn(),
  };
  const { getByTestId } = render(<RegisterForm {...registerFormProps} />);

  return {
    getByTestId,
    registerFormProps,
  };
}

describe('RegisterForm ', () => {
  it('should render correctly', () => {
    renderComponent();
  });

  describe('on click on navigate to login btn', () => {
    it('should navigate to login', () => {
      const { getByTestId, registerFormProps } = renderComponent();
      const navigateToLoginBtn = getByTestId('navigateToLoginBtn');
      fireEvent.press(navigateToLoginBtn);
      expect(registerFormProps.navigateToLogin).toHaveBeenCalled();
    });
  });
});
