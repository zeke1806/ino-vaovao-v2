import * as React from 'react';

import produce, { Draft } from 'immer';

import { User } from '../../api/types';

// State

export interface State {
  selectedRecipient: User[];
}

const initialState: State = {
  selectedRecipient: [],
};

// Action

interface SelectAction {
  type: 'SELECT';
  user: User;
}

interface UnselectAction {
  type: 'UNSELECT';
  user: User;
}

type Actions = SelectAction | UnselectAction;
export type Dispatch = (action: Actions) => void;

// Reducer

const reducer = produce((draft: Draft<State>, action: Actions) => {
  switch (action.type) {
    case 'SELECT':
      draft.selectedRecipient.push(action.user);
      break;

    case 'UNSELECT':
      draft.selectedRecipient.splice(
        draft.selectedRecipient.map((u) => u.id).indexOf(action.user.id),
        1,
      );
      break;
  }
});

// Context

export const SelectRecipientStateCtx = React.createContext<State | undefined>(
  undefined,
);

export const SelectRecipientDispatchCtx = React.createContext<
  Dispatch | undefined
>(undefined);

export const SelectRecipientProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <SelectRecipientStateCtx.Provider value={state as State}>
      <SelectRecipientDispatchCtx.Provider value={dispatch}>
        {children}
      </SelectRecipientDispatchCtx.Provider>
    </SelectRecipientStateCtx.Provider>
  );
};
