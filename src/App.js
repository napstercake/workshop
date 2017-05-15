import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      friends: [
        {"name": "Ricardo", "isFavorite": 1},
        {"name": "Juan", "isFavorite": 0},
        {"name": "Alejandro", "isFavorite": 1}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      friends: this.state.friends.concat({"name": this.state.value, "isFavorite": 0})
    });
    event.preventDefault();
  }

  add(i) {
    console.log('add method ' + i);
  }

  remove(i) {
    console.log('remove method ' + i);
  }

  render() {

    let friendsList = this.state.friends;

    /**
     * List of friends
     */
    const Friends = friendsList.map((friend, index) => {
      return (
        <li key={index}>
          <span>{friend.name}</span>
          <button onClick={() => this.add(index)} >A</button>
          <button onClick={() => this.remove(index)}>B</button>
        </li>
      );

    });

    /**
     * List of favorite friends
    */
    const FavoriteFriends = friendsList.map(function(favoriteFriend, index) {
      if (favoriteFriend.isFavorite === 1) {
        return <li key={index}> {favoriteFriend.name} </li>
      }
    });

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
            <h1>Mis favoritos</h1>
            {FavoriteFriends}
          </div>
         
        </div>
       
      </div>
    );
  }
}

export default App;
