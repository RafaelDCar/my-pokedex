import { gql } from '@apollo/client';

export const LOAD_POKEMONS = gql`
  query PokemonQuery {
    pokemons {
      id
      name
      url
    }
  }
`