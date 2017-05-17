// Libs
import React from 'react';

/**
 * @class FriendForm
 * @classdesc A class to represent the component <FriendForm>
 */
export default class FriendForm extends React.Component {
    
    /**
     * Render
     */
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    <input 
                        type="text" 
                        value={this.props.value} 
                        onChange={this.props.onChange} 
                        placeholder="Your friend..."
                    />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}
