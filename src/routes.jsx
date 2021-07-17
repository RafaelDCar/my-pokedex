import React from 'react';

import { Route } from 'react-router-dom';

import Home from './pages/home/home';
import Pokedex from './pages/pokedex/pokedex';

const RouterApp = () => {

  return (
    <>
      <Route path='/' exact component={Home} />
      <Route path='/pokedex' component={Pokedex} />
    </>
  )
}

export default RouterApp;