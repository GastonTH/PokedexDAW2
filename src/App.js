import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './pokebola.png';
import './App.css';

//*******Variables Globales **********//

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyPokedex</h2>
        </div>
      </div>
    );
  }
}

class Pokedex extends React.Component{

  constructor (props){ //props es el paso de parametros
    super(props);
    this.state = {
      listaPokemones : [{}],
    };
  }

  //llamada a la api de pokemon

  componentDidMount() {
  
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
  .then(res => {return res.json()})
  .then(jsonPokemones => {this.setState({listaPokemones : jsonPokemones.results});
  })
}

  render() {
    
    return (
  
  <div>
    
    {this.state.listaPokemones.map(
    iteracion => {return <Pokemon obj = ""/>}
  )}</div>);
  
  }

}

class Pokemon extends React.Component{

  componentDidMount(){

    console.log("assa");

  }

  render(){

      return(
      <div className = "pokemon"></div>
      );
  }
}

export default App;

window.onload = init;

function init() {
  
  ReactDOM.render(<Pokedex />, document.getElementById("Pokedex"));

}