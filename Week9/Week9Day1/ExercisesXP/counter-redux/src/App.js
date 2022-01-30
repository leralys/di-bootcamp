import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}



export default App;


