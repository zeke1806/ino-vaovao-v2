import * as React from 'react';

interface Shape {
  name: string;
  setName: (value: string) => void;
}

const Context = React.createContext<Shape | undefined>(undefined);

export const NameGroupeProvider: React.FC = ({ children }) => {
  const [name, _setName] = React.useState('');

  const value: Shape = {
    name,
    setName: (value): void => _setName(value),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useNameGroupe = (): Shape => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useNameGroupe must by used within a NameGroupeProvider');
  }
  return context;
};
