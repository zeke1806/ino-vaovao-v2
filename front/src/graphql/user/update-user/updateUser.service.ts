import * as React from 'react';

export interface UpdateUser {
  modal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const useUpdateUser = (): UpdateUser => {
  const [modal, setModal] = React.useState(false);

  const handleOpenModal = (): void => setModal(true);
  const handleCloseModal = (): void => setModal(false);

  return {
    modal,
    handleOpenModal,
    handleCloseModal,
  };
};
