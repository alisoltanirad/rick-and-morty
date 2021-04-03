import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Characters from './components/characters.js';
import Character from './components/character.js';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Characters}></Route>
      <Route exact path='/character' component={Character}></Route>
    </Switch>
  );
}

export default App;
