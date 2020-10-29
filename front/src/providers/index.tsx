import * as React from 'react';

import { DiscoveryProvider } from './discovery/discovery.context';
import { FilterUserProvider } from './filterUser';
import { SelectRecipientProvider } from './select-recipient/selectRecipient.context';
import { SessionProvider } from './session/session.context';

export const ContextProvider: React.FC = ({ children }) => {
  return [
    SessionProvider,
    SelectRecipientProvider,
    DiscoveryProvider,
    FilterUserProvider,
  ].reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children) as React.ReactElement;
};
