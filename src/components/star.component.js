// Libs
import React from 'react';

/**
 * @class <Star>
 * @classdesc A child component to fire some events that will update the main object.
 * 
 * @constructor
 *
 * @property action Set the favorite state into the object.
 */
export default class Star extends React.Component {

    constructor() {
        super();
        this.action = this.action.bind(this);
    }

    /**
     * Takes 2 paramerters to update the array of friends
     * @param   {event} e to take the attributes values from the node.
     */
    action(e) {
        this.props.update(e.target.name, e.target.value);
    }
    
    /**
     * Render
     */
    render() {
        return(
            <span className="actions">
                <button onClick={this.action} name={this.props.idx} value="1">A</button>
                <button onClick={this.action} name={this.props.idx} value="0">R</button>
            </span>
            
        );
    }
}
