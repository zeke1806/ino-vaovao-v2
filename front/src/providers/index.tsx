import * as React from 'react';

import { DiscoveryProvider } from './discovery/discovery.context';
import { FilterUserProvider } from './filterUser';
import { NameGroupeProvider } from './nameGroupe';
import { SelectRecipientProvider } from './select-recipient/selectRecipient.context';
import { SessionProvider } from './session/session.context';

export const ContextProvider: React.FC = ({ children }) => {
  return [
    SessionProvider,
    SelectRecipientProvider,
    DiscoveryProvider,
    FilterUserProvider,
    NameGroupeProvider,
  ].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children) as React.ReactElement;
};
