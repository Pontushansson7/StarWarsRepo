import React, { Component } from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
      return (
        <div>
          <div className="line"></div>
          <ul>
            <li className="goLeft"><NavLink to="/home">Home</NavLink></li>
          </ul>
          <div className="line"></div>
        </div>
      );
    }
  }

  export default Navbar;