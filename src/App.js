import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Characters from './components/characters';
import './App.css';

function App() {
  return (
    <Router basename="/starwarsapp/">
      <div className="App">
        <div className="App__Form">
          
          <div className="FormTitle">
              <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" >Home</NavLink>
              <NavLink to="/characters" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Characters</NavLink>
          </div>

            <Route exact path="/characters" component={Characters}>
            </Route>
            
          </div>
      </div>
    </Router>
  );
}

export default App;
