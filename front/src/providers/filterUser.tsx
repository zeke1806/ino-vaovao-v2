import * as React from 'react';

import { Discussion, User } from '../api/types';

type State = {
  suggestion: string;
  request: string;
  friend: string;
  selectRecipient: string;
  discussion: string;
};
type Keys = keyof State;
type SetSearch = (value: string, key: Keys) => void;
type Shape = {
  search: State;
  setSearch: SetSearch;
};

const Context = React.createContext<Shape | undefined>(undefined);

export const FilterUserProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<State>({
    suggestion: '',
    request: '',
    friend: '',
    selectRecipient: '',
    discussion: '',
  });

  const value: Shape = {
    search: state,
    setSearch: (value, key) => setState({ ...state, [key]: value }),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useFilterUser = (): Shape => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useFilterUser must by used within a FilterUserProvider');
  }
  return context;
};

export const filterUtil = (list: User[], search: string): User[] => {
  if (!search) return list;
  return list.filter((item) => item.username.includes(search));
};

export const filterDiscussion = (
  list: Discussion[],
  search: string,
): Discussion[] => {
  if (!search) return list;
  return list.filter((item) => item.name.includes(search));
};
