import React, { useState } from 'react'
import CardComponent from '../card/card.component'
import './card-list.styles.css'

const list = [
  {
    id: 1,
    name: 'Bulbasaur'
  },
  {
    id: 2,
    name: 'Ivysaur'
  },
  {
    id: 3,
    name: 'Venusaur'
  },
  {
    id: 4,
    name: 'Charmander'
  },
  {
    id: 5,
    name: 'Charmeleon'
  },
  {
    id: 6,
    name: 'Charizard'
  },
  {
    id: 7,
    name: 'Squirtle'
  },
  {
    id: 8,
    name: 'Wartortle'
  },
  {
    id: 9,
    name: 'Blastoise'
  }

]




const CardListComponent: React.FC = () => {

  const [pokemonList, setPokemonList] = useState(list);
  const [searchedPokemon, setSearchedPokemon] = useState<string | undefined>();

  const onSearchPokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedPokemon = pokemonList.filter((pokemon: any) => pokemon.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    console.log(searchedPokemon);

  }

  return (

    <div>
      <input
        type='search'
        value={searchedPokemon} 
        placeholder='Find a pokemon!' 
        onChange={onSearchPokemon} 
      />
      <div className='card-list'>
        {pokemonList.map((pokemon) => {
          return <div key={pokemon.id}><CardComponent pokemon={pokemon} /></div>
        })}
      </div>
    </div>
  )
}

export default CardListComponent;