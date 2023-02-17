import React, { Component } from "react";
import './Pokecard.css';



class Pokecard extends Component {
    render() {
        const { id, name, type, baseExperience } = this.props;
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        return (
            <div className="card mt-2 mb-2">
                <div className="imgwrap">
                    <img src={img} className="card-img-top" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title mt-1 mb-4">{name}</h5>
                    <p className="card-text mb-0">Type:{type}</p>
                    <p className="card-text">EXP:{baseExperience}</p>
                </div>
            </div>
        )
    }
}

export default Pokecard;

