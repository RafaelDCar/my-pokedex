import React from 'react';
import { PokemonProvider } from '../../context/context';
import CardList from './../../components/card-list/card-list.component';


const Home = () => {

  return(
    <PokemonProvider>
      <CardList/>
    </PokemonProvider>
  )
}

export default Home;