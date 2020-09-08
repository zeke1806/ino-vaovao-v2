import * as React from 'react';
import produce, { Draft } from 'immer';

// Actions

interface ConnectAction {
  type: 'CONNECT';
}

interface DisconnectAction {
  type: 'DISCONNECT';
}

interface SetReadyAction {
  type: 'SET_READY';
}

type SessionActions = ConnectAction | DisconnectAction | SetReadyAction;
export type SessionDispatch = (action: SessionActions) => void;

// Context

const initialState = {
  connected: false,
  appReady: false,
};
export type SessionState = typeof initialState;

const sessionReducer = produce(
  (draft: Draft<SessionState>, action: SessionActions) => {
    switch (action.type) {
      case 'CONNECT':
        draft.connected = true;
        break;

      case 'DISCONNECT':
        draft.connected = false;
        break;

      case 'SET_READY':
        draft.appReady = true;
        break;
    }
  },
);

export const SessionStateContext = React.createContext<
  SessionState | undefined
>(undefined);
export const SessionDispatchContext = React.createContext<
  SessionDispatch | undefined
>(undefined);

export const SessionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(sessionReducer, initialState);

  return (
    <SessionStateContext.Provider value={state}>
      <SessionDispatchContext.Provider value={dispatch}>
        {children}
      </SessionDispatchContext.Provider>
    </SessionStateContext.Provider>
  );
};
