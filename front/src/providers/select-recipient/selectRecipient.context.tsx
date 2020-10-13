import * as React from 'react';
import produce, { Draft } from 'immer';

// State

export interface State {
  selectedRecipient: Array<number>;
}

const initialState: State = {
  selectedRecipient: [1],
};

// Action

interface SelectAction {
  type: 'SELECT';
}

type Actions = SelectAction;
export type Dispatch = (action: Actions) => void;

// Reducer

const reducer = produce((draft: Draft<State>, action: Actions) => {
  switch (action.type) {
    case 'SELECT':
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
