import React, {useState, useContext} from 'react';
import { StoreContext } from './Store';

const FruitAdder = () => {

  const [inputFruit, setInputFruit] = useState('');
  const [_, dispatch] = useContext(StoreContext);

  const handleInputChange = (evt) => {
    setInputFruit(evt.target.value.trim());
  }

  const handleAddFruit = () => {
    dispatch({type: 'addFruit', payload:inputFruit});
    setInputFruit("");
  }

  return(
    <div>
      <input type='text' value={inputFruit} onChange={handleInputChange}/>
      <br />
      <input type='button' value='Add Fruit' 
        disabled={inputFruit.length===0} 
        onClick={ handleAddFruit }/>
    </div>
  )
}

export default FruitAdder;