import React, {useContext} from 'react';
import { StoreContext } from './Store';

// const fruits = ['apple', 'bannana', 'orange'];

const FruitDisplay = () =>{

  const [state] = useContext(StoreContext); 
  console.log(state.fruits);   

  return(
    <ul>
      {state.fruits.map( (fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
  )
}

export default FruitDisplay;