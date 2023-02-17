import React, { Component } from 'react';
import Pokedex from './Pokedex';

const pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]

function remove(items, index) {
    items.splice(index, 1)
    return items
}
const hand = [];
for (let i = 0; i < 4; i++) {
    let rand = Math.floor(Math.random() * pokemons.length);
    hand[i] = pokemons[rand];
    remove(pokemons, rand)
}
console.log(pokemons);
console.log(hand);
let n= 0;
for (let pokemon of pokemons){
    n += pokemon.base_experience
}
console.log(n)
let num = 0;
for (let pok of hand){
    num += pok.base_experience
}
console.log(num) 
class Pokegame extends Component {
    render() {
        return (
            <div>
                <Pokedex
                    hand={pokemons} 
                    title={ n>num ? "Winning Hand":"Losing Hand" }  
                    n = {n}
                />
                <Pokedex
                    hand={hand} 
                    title={ num>n ? "Winning Hand":"Losing Hand" } 
                    num = {num}
                />
            </div>
        )
    }
}

export default Pokegame;