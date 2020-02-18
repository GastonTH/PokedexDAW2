import React, { Component } from 'react';
import texto from './logoPokemon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={texto} className="App-texto"></img>
        </div>
      </div>
    );
  }
}
export default App;