import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Containers/Navbar';
import Home from '../Containers/Home';
import Character from '../Containers/Character';
import Planet from '../Containers/Planet';

export default () => (
  <BrowserRouter>
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Character} />
        <Route exact path="/planets" component={Planet} />
      </Switch>
    </div>
  </BrowserRouter>
)