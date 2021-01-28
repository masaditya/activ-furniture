import React from 'react';
import {useAuthService} from '../hook/services';
import reducer from './reducer';
const {getUsername} = useAuthService();

export const Context = React.createContext({});
export const Store = ({children}: any) => {
  const initialState = {
    userData: null,
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

export default {Context, Store};
