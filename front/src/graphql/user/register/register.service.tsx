import { REGISTER, RegisterData } from './register.gql';
import { UseRegisterForm, useRegisterForm } from './useRegisterForm';
import { AuthenticationNavigatorParamList } from '../../../navigations/AuthenticationNavigator';
import { MutationRegisterArgs } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { handleRegisterCompleted } from './handleCompletedRegister';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

export type UseRegister = {
  submitRegister: () => void;
  loadingRegister: boolean;
} & UseRegisterForm;

export const useRegister = (): UseRegister => {
  const navigation = useNavigation<
    StackNavigationProp<AuthenticationNavigatorParamList, 'Register'>
  >();
  const {
    handleChangeFormRegister,
    resetForm,
    registerForm,
    errorFormRegister,
    isFormOk,
  } = useRegisterForm();
  const [register, { loading: loadingRegister }] = useMutation<
    RegisterData,
    MutationRegisterArgs
  >(REGISTER, {
    onCompleted: ({ register }) => {
      handleRegisterCompleted(register, resetForm, navigation);
    },
  });

  const submitRegister = (): void => {
    if (isFormOk()) {
      register({
        variables: {
          registerInput: {
            username: registerForm.username,
            password: registerForm.password,
          },
        },
      });
    }
  };

  return {
    submitRegister,
    loadingRegister,
    handleChangeFormRegister,
    resetForm,
    registerForm,
    errorFormRegister,
    isFormOk,
  };
};
