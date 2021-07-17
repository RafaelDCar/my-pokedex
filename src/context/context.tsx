import React, { createContext, useState } from 'react';

type Pokemon = {
  id: number;
  name: string
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

  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemonList);

  const onSearchPokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    const searchedPokemon = pokemons.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setPokemons(searchedPokemon);
  }

  const onRemoveFilters = (event: any) => {
    setPokemons(initialPokemonList)
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