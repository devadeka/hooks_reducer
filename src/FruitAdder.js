import React, {useState} from 'react';

const FruitAdder = () => {

  const [inputFruit, setInputFruit] = useState('');

  const handleInputChange = (evt) => {
    setInputFruit(evt.target.value.trim());
  }

  return(
    <div>
      <input type='text' onChange={handleInputChange}/>
      <br />
      <input type='button' value='Add Fruit' disabled={inputFruit.length===0}/>
    </div>
  )
}

export default FruitAdder;