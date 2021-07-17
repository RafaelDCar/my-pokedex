import React from 'react';

import { Route, HashRouter } from 'react-router-dom';

import Home from './pages/home/home';
import Pokedex from './pages/pokedex/pokedex';

const RouterApp = () => {

  return (
    <HashRouter basename='/'>
      <Route path='/' exact component={Home} />
      <Route path='/pokedex' component={Pokedex} />
    </HashRouter >
  )
}

export default RouterApp;