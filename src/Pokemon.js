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
        this.cerrar = this.cerrar.bind(this);
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
        this.setState({info: true})
        /*ReactDOM.render(<PokeInfo obj={this.state.pokeInfo} cerrado="false" />, document.querySelector('[data-pokemon=' + this.props.obj.name + "]"));
        console.log(document.querySelector('[data-pokemon=' + this.props.obj.name + "]"));*/
    }

    cerrar(){
        console.log("cerrar");
        this.setState({info: false})  
    }

    render() {

        if (this.state.cargado) {

            if (!this.state.info) {
                
                return (
                    <div onClick={this.crearInfo} className="pokemon">
                        <p>
                            {this.state.pokeInfo.id}<br />
                            {this.state.pokeInfo.name}<br />
                        </p>
                        <img src={this.state.pokeInfo.sprites.front_default} />
                    </div>
                );

            } else {

                return(
                    <div className="info">
                        <div onClick={this.cerrar} className="cerrar">cerrar</div>
                        <p>CARGANDO</p>
                    </div>
                );

            }

        } else {

            return (
                <div><p>CARGANDO</p></div>
            )
        }

    }
}

export default Pokemon;