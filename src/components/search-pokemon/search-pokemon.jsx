import React, {useContext} from 'react'
import { PokemonContext } from '../../context/context';

const SearchPokemon = () => {

  const context = useContext(PokemonContext)

  return (
    <>
      <input
        type='search'
        placeholder='Find a pokemon!'
        onChange={context.onSearchPokemon}
      />
      <button onClick={context.onRemoveFilters}>Remove Filter</button>
    </>
  )
}

export default SearchPokemon;