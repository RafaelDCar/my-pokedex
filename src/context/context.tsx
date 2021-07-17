import { useQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';
import { LOAD_POKEMONS } from '../graphData/Query';

type Pokemon = {
  id: number;
  name: string;
  url: string;
}

type PokemonContextType = {
  pokemons: Pokemon[],
  onSearchPokemon: any,
  onRemoveFilters: any
}

const initialPokemonList = [
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

export const PokemonContext = createContext({} as PokemonContextType);

export const PokemonProvider: React.FC = ({ children }) => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  const {data} = useQuery(LOAD_POKEMONS)

  useEffect(() => {
    if(data) {
      console.log('context effect', data)
      setPokemons(data.pokemons)
    }
  }, [data])

  const onSearchPokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    const searchedPokemon = pokemons.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setPokemons(searchedPokemon);
  }

  const onRemoveFilters = (event: any) => {
    setPokemons(pokemons)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        onSearchPokemon,
        onRemoveFilters
      }}
    >
      {children}
    </PokemonContext.Provider>
  )

}