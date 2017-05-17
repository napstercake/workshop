// Libraries
import React, { Component } from 'react';
import logo from './logo.svg';
import update from 'immutability-helper';

// Css
import './App.css';

// Components
import FriendForm from './components/friend-form.component'
import FriendsList from './components/friends-list.component'
import FriendsListFavorites from './components/friends-list-favorites.component'

/** 
 * @class represent the main application.
 * @classdesc This is the main class. it contains methods and variables to the whole app.
 * 
 * @constructor
 *
 * @property value the value of the form component
 * @property friends the list of object refers to friends
 */
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

  /**
   * Take de event as a param and set the value into state.
   * @param   {event} event
   */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /**
   * Take de event as a param and set the value into the array of objects <friends>
   * @param   {event} event
   */
  handleSubmit(event) {
    this.setState({
      friends: this.state.friends.concat({"name": this.state.value, "isFavorite": 0})
    });
    event.preventDefault();
  }

  /**
   * Updates the array of objects
   * @param   {number} id - The id of the object
   * @param   {string} isFavorite - the flag to recognize if its favorite.
   */
  updateFavoriteFriend(id, isFavorite) {
    var changedFriendFavoriteStatus = update(this.state.friends, {
        [id] : {
            isFavorite: { $set: (isFavorite == 1) ? 1 : 0 }
        }
    });
    this.setState({ friends: changedFriendFavoriteStatus });
  }

  /**
   * Render
   */
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
                action={this.updateFavoriteFriend}
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


