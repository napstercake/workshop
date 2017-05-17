import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        {"name": "Ricardo", "isFavorite": 1},
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
    var changedFriendFavoriteStatus = update(this.state.friends, {
        [id] : {
            isFavorite: { $set: (isFavorite == 1) ? 1 : 0 }
        }
    });
    
    this.setState({ friends: changedFriendFavoriteStatus });
    
  }

  render() {

    return (
      <div className="app">
          
          <div className="form-wrapper">
            <FriendForm 
              onSubmit={this.handleSubmit} 
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="friend-list-wrapper">
            <FriendsList 
              list={this.state.friends}
              add={this.updateFavoriteFriend}
            /><div className="clear"></div>
          </div>

          

          <div className="friend-list-favorite-wrapper">
            <label>Mis favoritos</label>
            <FriendsListFavorites 
              list={this.state.friends}
            />
          </div>
         
      </div>
    );
  }
}


