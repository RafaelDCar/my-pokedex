import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.css'

interface PokemonInterface {
  pokemon: any
}

const CardComponent: React.FC<PokemonInterface> = ({ pokemon }) => {
  return (
    <Link to="/pokedex/:id">
      <div className='card-container'>
        <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
        {pokemon.name}
      </div>
    </Link>
  )
}

export default CardComponent;