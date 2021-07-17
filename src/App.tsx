import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PokemonGraphProvider } from './graphData/provider';
import RouterApp from './routes';


const App = () => {

  return (
    <div className="App">
      <PokemonGraphProvider>
        <BrowserRouter>
          <RouterApp></RouterApp>
        </BrowserRouter>

      </PokemonGraphProvider>

    </div>
  );
}

export default App;
