import React, { Component } from 'react';
import texto from './logoPokemon.png';
import './App.css';

export default class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <div className = "App-header">
                    <img src={texto} className="App-texto" />
                </div>
            </div>
        );
    }
}