import React, { Component } from 'react';
import './Pokedex.css';
import pokebol from './pokebola.png';


class Pokemon extends Component {

    constructor(props) {

        super(props)
        this.state = {

            cargado: false,
            info: false,
            pokeInfo: [],
            descripcion: "",


        }
        this.crearInfo = this.crearInfo.bind(this);
        this.cerrar = this.cerrar.bind(this);
    }

    async descargarDatos() {

        let priFetch = await fetch(this.props.obj.url);
        let jsonPokemon = await priFetch.json();
        let secFetch = await fetch(jsonPokemon.species.url);
        let pokeDesc = await secFetch.json();
        //let terFetch = await fetch(pokeDesc.evolution_chain.url);
        //let evoChain = await terFetch.json();
        //console.log(evoChain);

        this.setState({ pokeInfo: jsonPokemon, cargado: true, descripcion: pokeDesc }); //le decimos que vuelva a refrescar

    }

    componentDidMount = async () => {
        await this.descargarDatos();
        //console.log("pokemon cargado");

    };

    crearInfo() {
        //console.log("/****-- infoooooooooo --***/");
        this.setState({ info: true })
        //console.log(this.state.descripcion);

    }

    cerrar() {
        console.log("cerrar");
        this.setState({ info: false })
    }

    crearTipos() {

        if (this.state.pokeInfo.types[0].slot === 2) {

            return (
                <div className="tipos">
                    <img alt={"tipo 1 " + this.state.pokeInfo.types[0].type.name} src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[0].type.name + ".png"} /> 
                    <img alt={"tipo 2 " + this.state.pokeInfo.types[1].type.name} src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[1].type.name + ".png"} />

                </div>
            )


        } else {

            return (
                <div className="tipos">
                    <img alt={"tipo " + this.state.pokeInfo.types[0].type.name} src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[0].type.name + ".png"} />
                </div>

            )
        }
    }

    pokeDescripcion() {

        for (let i = 0; i < this.state.descripcion.flavor_text_entries.length; i++) {

            if (this.state.descripcion.flavor_text_entries[i].language.name === "es") {

                return (
                    <p>{this.state.descripcion.flavor_text_entries[i].flavor_text}</p>
                );

            }

        }

    }

    MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    funcionTranEnd(){
        console.log("doneeee");
    }

    render() {

        if (this.state.cargado) {

            if (!this.state.info) {

                return (
                    <div key={this.state.pokeInfo.name} onClick={this.crearInfo} className="pokemon">
                        <p>
                            {this.state.pokeInfo.id} {this.MaysPrimera(this.state.pokeInfo.name)}<br />
                        </p>
                        <img alt={"Pokemon: " + this.state.pokeInfo.name} className="pokeFoto" src={this.state.pokeInfo.sprites.front_default} />
                    </div>
                );

            } else {

                return (
                    <div /*onTransitionEnd={this.funcionTranEnd()}*/ onClick={this.cerrar} className="info">
                        <p>{this.state.pokeInfo.id} {this.MaysPrimera(this.state.pokeInfo.name)}</p>
                        <img alt={"Pokemon: " + this.state.pokeInfo.name} src={this.state.pokeInfo.sprites.front_default} />
                        <p>Peso: {this.state.pokeInfo.weight}</p>
                        <p>Altura: {this.state.pokeInfo.height} cm</p>
                        {this.crearTipos()}
                        {this.pokeDescripcion()}
                    </div>
                );

            }

        } else {

            return (
                <div><img alt="logo cargando" className="logoBola" src={pokebol} /></div>
            )
        }

    }
}

export default Pokemon;