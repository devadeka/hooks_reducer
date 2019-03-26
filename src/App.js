import React, { Component } from 'react';
import './App.css';
import FruitDisplay from './FruitDisplay';
import FruitAdder from './FruitAdder';
import Store from './Store';

class App extends Component {
  render() {
    return (
      <Store>
        <div className="App">
          <FruitAdder />
          <header className="App-header">
            <FruitDisplay />
          </header>
        </div>
      </Store>
    );
  }
}

export default App;
