import React, { createContext, useReducer } from 'react';

const initialState = {fruits: []};

export const StoreContext = createContext('initialState');

function reducer(state, action) {
  switch (action.type) {
    case 'addFruit':
      return {fruits: [...state.fruits, action.payload]}
    default:
      return state.fruits
  }
}

const Store = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store;