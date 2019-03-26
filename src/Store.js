import React, { useContext, useReducer } from 'react';

const StoreContext = useContext({});

const initialState = {fruits: []};

function reducer(state, action) {
  switch (action.type) {
    case 'addFruit':
      return {fruits: [...state.fruits, action.payload]}
    default:
      return state.fruits
  }
}

const Store = (children) => {

  const [state, dispatch] = userReducer(reducer, initialState);

  return(
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store;