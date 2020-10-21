import * as React from 'react';

import produce, { Draft } from 'immer';

import { DISCOVERY_CATEGORIES } from '../../configs';

// State
export interface State {
  categories: Array<DISCOVERY_CATEGORIES>;
  searchRecipe: string;
}

const initialState: State = {
  categories: [],
  searchRecipe: '',
};

// Action
interface ToogleAction {
  type: 'TOOGLE';
  category: DISCOVERY_CATEGORIES;
}

interface ChangeSearchRecipeAction {
  type: 'CHANGE_SEARCH_RECIPE';
  value: string;
}

type Actions = ToogleAction | ChangeSearchRecipeAction;
export type Dispatch = (action: Actions) => void;

// Reducer
const reducer = produce((draft: Draft<State>, action: Actions) => {
  switch (action.type) {
    case 'TOOGLE':
      if (draft.categories.includes(action.category)) {
        draft.categories = draft.categories.filter(
          (c) => c !== action.category,
        );
      } else {
        draft.categories.push(action.category);
      }
      break;

    case 'CHANGE_SEARCH_RECIPE':
      draft.searchRecipe = action.value;
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
