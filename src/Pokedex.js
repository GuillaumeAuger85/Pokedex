import { Component } from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard';


function addZeros(i) {
    let id = '';
    if (i < 10) {
        return id = `00${i}`
    } else if (i < 100) {
        return id = `0${i}`
    } else { return id = i }
}

class Pokedex extends Component {
    render() {
        const allcard = this.props.hand;
        const cards = allcard.map(el => {
            return <Pokecard
                id={addZeros(el.id)}
                name={el.name}
                type={el.type}
                baseExperience={el.base_experience}
            />
        });
        let totalExp = 0;
        if (this.props.n) {
            totalExp = this.props.n;

        } else {
            totalExp = this.props.num;

        }
        return (
            <div className='Pokedex mt-2'>
                <div className='divWrap'>
                    <h2 className={this.props.title === 'Winning Hand' ? 'text-success text-center' : 'text-danger text-center'}>{this.props.title}</h2>
                    <h6 className='text-center'>Total Experience: {totalExp}</h6>
                </div>
                <div className="row d-flex justify-content-evenly">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Pokedex;