import * as React from 'react';
import produce, { Draft } from 'immer';
import { DISCOVERY_CATEGORIES } from '../../configs';

// State
export interface State {
  categories: Array<string>;
}

const initialState: State = {
  categories: [],
};

// Action
interface SelectCategoryAction {
  type: 'SELECT_CATEGORY';
  category: DISCOVERY_CATEGORIES;
}

type Actions = SelectCategoryAction;
export type Dispatch = (action: Actions) => void;

// Reducer
const reducer = produce((draft: Draft<State>, action: Actions) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      break;
  }
});

// Context
export const DiscoveryStateCtx = React.createContext<State | undefined>(
  undefined,
);
export const DiscoveryDispatchCtx = React.createContext<Dispatch | undefined>(
  undefined,
);

export const DiscoveryProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <DiscoveryStateCtx.Provider value={state as State}>
      <DiscoveryDispatchCtx.Provider value={dispatch}>
        {children}
      </DiscoveryDispatchCtx.Provider>
    </DiscoveryStateCtx.Provider>
  );
};
