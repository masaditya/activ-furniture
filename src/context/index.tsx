import React from 'react';

import {rootReducer} from './reducers';
import {initialState} from './reducers/initialState';

export const RootContext = React.createContext({});

export const RootProvider = (props: any) => {
  const [globalState, dispatch] = React.useReducer(rootReducer, initialState());

  return (
    <RootContext.Provider value={{globalState, dispatch}}>
      {props.children}
    </RootContext.Provider>
  );
};
