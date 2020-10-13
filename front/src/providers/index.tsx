import * as React from 'react';

import { SelectRecipientProvider } from './select-recipient/selectRecipient.context';
import { SessionProvider } from './session/session.context';

export const ContextProvider: React.FC = ({ children }) => {
  return [SessionProvider, SelectRecipientProvider].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children) as React.ReactElement;
};
