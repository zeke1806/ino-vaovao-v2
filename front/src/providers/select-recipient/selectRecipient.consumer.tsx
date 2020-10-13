import * as React from 'react';

import {
  Dispatch,
  SelectRecipientDispatchCtx,
  SelectRecipientStateCtx,
  State,
} from './selectRecipient.context';

export const useSelectRecipientState = (): State => {
  const context = React.useContext(SelectRecipientStateCtx);
  if (context === undefined) {
    throw new Error(
      'userSelectRecipientState must by used within a SelectRecipientProvider',
    );
  }
  return context;
};

export const useSelectRecipientDispatch = (): Dispatch => {
  const context = React.useContext(SelectRecipientDispatchCtx);
  if (context === undefined) {
    throw new Error(
      'useSelectRecipientDispatch must by used within a SelectRecipientProvider',
    );
  }
  return context;
};
