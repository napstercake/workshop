import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";

class App extends Component {

  constructor(props, amigos) {
    super(props);
    this.state = {
      value: '',
      amigos: ['mm']
    };
    //this.amigos = amigos;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name of a friend was submitted: ' + this.state.value);
    var joined = this.state.amigos.concat(this.state.value);
    this.setState({
      amigos: joined
    });
    console.log('>>> ' + this.state.amigos);
    event.preventDefault();
  }

  render() {

    let amiguitos = this.state.amigos;
    const Friends = amiguitos.map((amigos, index) => 
      <li key={index}>
        <span>{amigos}</span>
        <button>A</button>
        <button>B</button>
      </li>
    )

    const FavoriteFriends = amiguitos.map((favoriteFriend, index) =>
      <li key={index}>
        {favoriteFriend}
      </li>
    )

    return (
      <div className="App">
        <div className="header">
          
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Agregar amigo"/>
            </label>
            <input type="submit" value="Submit" />
          </form>

          <div className="content">
            <ul> {Friends} </ul>
          </div>
          <div className="footer">
            <h1>mis favoritos</h1>
            {FavoriteFriends}
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
