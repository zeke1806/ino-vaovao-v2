import { useImmer } from 'use-immer';

export interface UpdateUser {
  state: {
    name: string;
    password: string;
    statusConnected: boolean;
    modal: boolean;
  };
  handleChange: (
    key: 'password' | 'statusConnected' | 'name',
    value: string | boolean,
  ) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const useUpdateUser = (
  name: string,
  password: string,
  statusConnected: boolean,
): UpdateUser => {
  const [state, setState] = useImmer({
    name,
    password,
    statusConnected,
    modal: false,
  });

  const handleOpenModal = (): void =>
    setState((draft) => {
      draft.modal = true;
    });

  const handleCloseModal = (): void =>
    setState((draft) => {
      draft.modal = false;
    });

  const handleChange = (
    key: 'password' | 'statusConnected' | 'name',
    value: string | boolean,
  ): void => {
    if ((key === 'name' || key === 'password') && typeof value === 'string') {
      setState((draft) => {
        draft[key] = value;
      });
    } else if (key === 'statusConnected' && typeof value === 'boolean') {
      setState((draft) => {
        draft[key] = value;
      });
    }
  };

  return {
    state,
    handleChange,
    handleOpenModal,
    handleCloseModal,
  };
};
