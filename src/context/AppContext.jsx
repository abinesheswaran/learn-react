/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const InitialState = {
  val: 0,
};

const reducer = (state, action) => {
  return { ...state, val: state.val + action.val };
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [currentState, dispatch] = useReducer(reducer, InitialState);
  return (
    <AppContext.Provider
      value={{ name: 'abinesh', age: 25, val: currentState, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { useAppContext, AppProvider };
