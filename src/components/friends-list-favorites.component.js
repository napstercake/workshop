import React from 'react';

export default class FriendsListFavorites extends React.Component {
    
    render() {
        const friendsList = this.props.list;
        const FavoriteFriends = friendsList.map(function(favoriteFriend, index) {
            if (favoriteFriend.isFavorite === 1) {
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
