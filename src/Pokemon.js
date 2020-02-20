import React, { Component } from 'react';

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
        //console.log(pokeDesc);

        this.setState({ pokeInfo: jsonPokemon, cargado: true, descripcion: pokeDesc }); //le decimos que vuelva a refrescar

    }

    componentDidMount = async () => {
        await this.descargarDatos();
        //console.log("pokemon cargado");

    };

    crearInfo() {
        console.log("/****-- infoooooooooo --***/");
        this.setState({ info: true })
        console.log(this.state.descripcion);

    }

    cerrar() {
        console.log("cerrar");
        this.setState({ info: false })
    }

    crearTipos() {

        if (this.state.pokeInfo.types[0].slot === 2) {

            return (
                <div className="tipos">
                    <img src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[0].type.name + ".png"} />
                    <img src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[1].type.name + ".png"} />

                </div>
            )


        } else {

            return (
                <div className="tipos">
                    <img src={"https://veekun.com/dex/media/types/en/" + this.state.pokeInfo.types[0].type.name + ".png"} />
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

    render() {

        if (this.state.cargado) {

            if (!this.state.info) {

                return (
                    <div key={this.state.pokeInfo.name} onClick={this.crearInfo} className="pokemon">
                        <p>
                            {this.state.pokeInfo.id}<br />
                            {this.state.pokeInfo.name}<br />
                        </p>
                        <img src={this.state.pokeInfo.sprites.front_default} />
                    </div>
                );

            } else {

                return (
                    <div className="info">
                        <div onClick={this.cerrar} className="cerrar">cerrar</div>
                        <p>{this.state.pokeInfo.name}</p>
                        <p>{this.state.descripcion.base_happiness}</p>
                        {this.crearTipos()}
                        {this.pokeDescripcion()}
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