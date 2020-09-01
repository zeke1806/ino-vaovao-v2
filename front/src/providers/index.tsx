import * as React from 'react';

import { SessionProvider } from './session/session.context';

export const ContextProvider: React.FC = ({ children }) => {
  return [SessionProvider].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children) as React.ReactElement;
};
