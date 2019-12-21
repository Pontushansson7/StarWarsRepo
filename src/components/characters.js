import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const UrlCharacters = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/' + 1; //ska hämta luke
class Character extends Component {
    state ={
        characters:[]                                
    };
    getCharacters = async () => {
        const apiCall = await fetch(UrlCharacters);
        const data = await apiCall.json();
        console.log(data);

        let listItems =[];
        data.forEach(element => {
            listItems.push(element);
        });
        
        this.setState({
            characters: listItems
        });
        console.log(this.state.characters);
    }
    render() {
        return(
        <div>
            <button onClick={this.getCharacters}>Show character</button>
            {this.state.characters.map((item) =>
            <div>
                <p>{item.name}</p>
            </div>
            )}
        </div>
        )
    }
}
export default Character;