import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokeInfo from './PokeInfo';

class Pokemon extends Component {

    constructor(props) {

        super(props)
        this.state = {

            cargado: false,
            info: false,
            pokeInfo: [],


        }
        this.crearInfo = this.crearInfo.bind(this);
    }

    async descargarDatos() {

        let nombre = await fetch(this.props.obj.url);
        let jsonPokemon = await nombre.json();
        this.setState({ pokeInfo: jsonPokemon, cargado: true });

    }

    componentDidMount = async () => {
        await this.descargarDatos();
        console.log("pokemon cargado");

    };

    crearInfo() {
        console.log("/****-- infoooooooooo --***/");
       ReactDOM.render(<PokeInfo obj={this.state.pokeInfo} cerrado = "false" />, document.querySelector('[data-pokemon=' + this.props.obj.name+"]"));
       console.log(document.querySelector('[data-pokemon=' + this.props.obj.name+"]"));
    }

    render() {

        if (this.state.cargado) {

            return (
                <div onClick={this.crearInfo} className="pokemon">
                    <p>
                        {this.state.pokeInfo.id}<br />
                        {this.state.pokeInfo.name}<br />
                    </p>
                    <img src={this.state.pokeInfo.sprites.front_default} />
                    <div data-pokemon={this.props.obj.name} className="info"></div>
                </div>
                );


        } else {

            return (
                <div><p>CARGANDO</p></div>
            )
        }

    }
}

export default Pokemon;