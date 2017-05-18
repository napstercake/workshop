// Libs
import React from 'react';
import update from 'immutability-helper';

// Components
import Star from './star.component';
                 

/**
 * @class <FriendsList>
 * @classdesc A class that represent the list of friends component.
 * 
 * @constructor
 *
 * @property action Set the favorite state into the object.
 */
export default class FriendsList extends React.Component {

    constructor(){
        super();
        this.chain = this.chain.bind(this);
    }

    /**
     * Takes 2 paramerters to update the array of friends
     * @param   {event} e to take the attributes values from the node.
     */
    chain(id, isFavorite) {
        this.props.chain(id, isFavorite);
    }
    
    /**
     * Render
     */
    render() {
        
        // List of the friends setted from the main component
        const friendsList = this.props.list;

        return(
            <ul>
                {friendsList.map((friend, index) => 
                    (this.props.kind == "NL") ? 
                        <li key={index}> 
                            <span className="text">{friend.name}</span>
                            <Star update={this.chain} idx={index}/>
                        </li> 
                    : (friend.isFavorite === 1) ? 
                        <li key={index}>
                            <span className="text">{friend.name}</span> 
                        </li>
                    : null
                )}
            </ul>
        );
    }
}
