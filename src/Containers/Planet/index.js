import React, { Component } from 'react';
import '../../App.css';
import '../Forms.css';
import axios from 'axios';

class Planets extends Component {
    state = {
        id: '',
        inData: [],
        error:'',
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    submitApi = () => {
        axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets/' + this.state.id)
        .then((response) => {
            this.setState({inData: response.data, error: ''});
            console.log(response);
        })
        .catch((error) => {
            this.setState({error: 'Hittade ingen planet med det Id:t', inData: ''})
            
        })
        
    }
    render(){
        return(
            <div className="form-style-6">
                <h3>Hämta info om planeter via id!</h3>
                <input type="number" name="id" placeholder="TYPE ID" value={this.state.id} onChange={this.handleChange} />
                <input type="submit" onClick={this.submitApi} value="Hämta info via ID" />
                <p className="placering">{this.state.inData.name}</p>
                <p className="placering">{this.state.error}</p>
            </div>
        );
    }
}
export default Planets;