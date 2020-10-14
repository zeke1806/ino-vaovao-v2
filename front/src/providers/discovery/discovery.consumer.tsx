import * as React from 'react';
import {
  DiscoveryDispatchCtx,
  DiscoveryStateCtx,
  Dispatch,
  State,
} from './discovery.context';

export const useDiscoveryState = (): State => {
  const context = React.useContext(DiscoveryStateCtx);
  if (context === undefined) {
    throw new Error(
      'userDiscoveryState must by used within a DiscoveryProvider',
    );
  }
  return context;
};

export const useDiscoveryDispatch = (): Dispatch => {
  const context = React.useContext(DiscoveryDispatchCtx);
  if (context === undefined) {
    throw new Error(
      'useDiscoveryDispatch must by used within a DiscoveryProvider',
    );
  }
  return context;
};
