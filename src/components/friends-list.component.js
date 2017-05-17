// Libs
import React from 'react';

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
        this.action = this.action.bind(this);
    }

    /**
     * Takes 2 paramerters to update the array of friends
     * @param   {event} e to take the attributes values from the node.
     */
    action(e) {
        this.props.action(e.target.name, e.target.value);
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
                    <li key={index}>
                        <span className="text">{friend.name}</span>  
                        <span className="actions">
                            <button onClick={this.action} name={index} value="1">A</button>
                            <button onClick={this.action} name={index} value="0">R</button>
                        </span>
                        
                    </li> 
                )}
            </ul>
        );
    }
}
