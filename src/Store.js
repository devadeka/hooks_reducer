import React, { useContext } from 'react';

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
  return(
    <div>
      {children}
    </div>
  )
}

export default Store;