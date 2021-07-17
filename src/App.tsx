import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import RouterApp from './routes';

const App = () => {

  return (
    <div className="App">
    <BrowserRouter>
      <RouterApp></RouterApp>
    </BrowserRouter>

    </div>
  );
}

export default App;
