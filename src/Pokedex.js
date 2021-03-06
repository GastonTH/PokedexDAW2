import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

export default  class Pokedex extends Component {

    constructor(props) { //props es el paso de parametros
        super(props);
        this.state = {
            listaPokemones: [],
            cargado : false,
        };
    }

    //llamada a la api de pokemon

    async descargarDatos(){

        let fetch1 = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        let jsonPokemones = await fetch1.json();
        this.setState({ listaPokemones: jsonPokemones.results, cargado : true});

    }

    async componentDidMount() {

        await this.descargarDatos();
        
    }

    render() {

        if (this.state.cargado) {
            
            return(
                <div id="rejilla">
                {this.state.listaPokemones.map(
                    iteracion => {return <Pokemon obj={iteracion} key={iteracion.name} /> } //key super importante ^-^ //le paso como parametro el objeto ya creado
                )}</div>
            );

        }else{
            return(

                <div><p>cargando</p></div>
            )
        }
        

    }

}
