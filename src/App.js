import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/starwarsapp/">
      <div className="App">
      <NavLink to="/characters" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Home</NavLink>
      </div>
    </Router>
  );
}

export default App;
