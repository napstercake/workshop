import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";
import update from 'immutability-helper';

// Components
import FriendForm from './components/friend-form.component'
import FriendsList from './components/friends-list.component'
import FriendsListFavorites from './components/friends-list-favorites.component'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      friends: [
        {"name": "Ricardo", "isFavorite": 0},
        {"name": "Juan", "isFavorite": 1},
        {"name": "Alejandro", "isFavorite": 0}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFavoriteFriend = this.updateFavoriteFriend.bind(this);
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

  /**
   * Update favorite friend
   */
  updateFavoriteFriend(id, isFavorite) {
    console.log('id>: ' + id);
    console.log('isFavorite>: ' + isFavorite);

    var changedFriendFavoriteStatus = update(this.state.friends, {
        [id] : {
            isFavorite: { $set: (isFavorite) ? 1 : 0 }
        }
    });
    this.setState({ friends: changedFriendFavoriteStatus });
  }

  render() {

    // let friendsList = this.state.friends;

    /**
     * List of favorite friends
   
    const FavoriteFriends = friendsList.map(function(favoriteFriend, index) {
      if (favoriteFriend.isFavorite === 1) {
        return <li key={index}> {favoriteFriend.name} </li>
      }
    }, this); {FavoriteFriends} */

    return (
      <div className="App">
        <div className="header">
          
          <FriendForm 
            onSubmit={this.handleSubmit} 
            value={this.state.value}
            onChange={this.handleChange}
          />

          <div className="content">
            <FriendsList 
              list={this.state.friends}
              add={this.updateFavoriteFriend}
              
            />
          </div>
         
          <div className="footer">
            <h1>Mis favoritos</h1>
            <FriendsListFavorites 
              list={this.state.friends}
            />
          </div>
         
        </div>
       
      </div>
    );
  }
}


