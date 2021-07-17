import React, { useContext } from 'react'
import { PokemonContext } from '../../context/context'
import CardComponent from '../card/card.component'
import SearchPokemon from '../search-pokemon/search-pokemon'
import './card-list.styles.css'


const CardListComponent: React.FC = () => {

  const { pokemons } = useContext(PokemonContext)

  console.log('provider context ', pokemons)

  return (

    <div className='wrapper'>
      <SearchPokemon />
      <div className='card-list'>
        {pokemons.map((pokemon) => {
          return <div key={pokemon.id}><CardComponent pokemon={pokemon} /></div>
        })}
      </div>
    </div>
  )
}

export default CardListComponent;