import React, { Component } from 'react';

class Pokemon extends Component {

    constructor(props) {

        super(props)
        this.state = {

            cargado: false,
            pokeInfo: [],


        }
    }

    async descargarDatos() {

        let nombre = await fetch(this.props.obj.url);
        let jsonPokemon = await nombre.json();
        this.setState({ pokeInfo: jsonPokemon, cargado:true });

    }

    componentDidMount = async() => {
        await this.descargarDatos();
        console.log("pokemon cargado");
        
    };

    render() {

        if (this.state.cargado) {
            return (
                <div data-pokemon={this.props.obj.name} className="pokemon">
                <p>
                    {this.state.pokeInfo.id}<br />
                    {this.state.pokeInfo.name}<br />
                </p>
                <img src={this.state.pokeInfo.sprites.front_default}
/>
                </div>
            );
        }else{
            return(

                <div><p>cargando</p></div>
            )
        }
        
    }
}

export default Pokemon;