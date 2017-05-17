import React from 'react';

export default class FriendForm extends React.Component {
    
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
