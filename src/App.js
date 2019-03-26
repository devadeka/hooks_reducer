import React, { Component } from 'react';
import './App.css';
import FruitDisplay from './FruitDisplay';
import FruitAdder from './FruitAdder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FruitAdder />
        <header className="App-header">
          <FruitDisplay />
        </header>
      </div>
    );
  }
}

export default App;
