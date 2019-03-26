import React from 'react';

const fruits = ['apple', 'bannana', 'orange'];

const FruitDisplay = () =>{
  return(
    <ul>
      {fruits.map( (fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
  )
}

export default FruitDisplay;