import React, { Component } from 'react';
import '../../App.css';
import '../Home/home.css';
class Home extends Component {
    render() {
      return (
        <div>
          <h3>
           Välkommen till Pontus Hansson webbsida för att visa apier!</h3>
          <h4>Vad kan du göra här?</h4>
          <p>
              Hämta information om star wars karaktärer via ID
              Hämta information om planeter via ID.
          </p>
          <div className="line"></div>
        </div>
      );
    }
  }

  export default Home;