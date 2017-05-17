// Libs
import React from 'react';

/**
 * @class FriendListFavorites
 * @classdesc A class to represent the component <FriendListFavorites>
 */
export default class FriendsListFavorites extends React.Component {
    
    /**
     * Render
     * 
     * @TODO This method can be part of the <FriendList component>
     */
    render() {

        // List of the friends inherance from main class
        const friendsList = this.props.list;
        const FavoriteFriends = friendsList.map(function(favoriteFriend, index) {
            if (favoriteFriend.isFavorite === 1) { // Validate if there a favorite friend
                return <li key={index}> {favoriteFriend.name} </li>
            }
        }, this); 

        return(
            <ul>
                {FavoriteFriends}
            </ul>
        );
    }
}
