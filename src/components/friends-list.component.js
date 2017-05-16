import React from 'react';

export default class FriendsList extends React.Component {

    constructor(){
        super();
        this.add = this.add.bind(this);
    }

    add(e) {
        this.props.add(e.target.name, e.target.value);
    }
    
    render() {
        const friendsList = this.props.list;
        return(
            <ul>
                {friendsList.map((friend, index) => 
                    <li key={index}>
                        <span>{friend.name}</span>  
                        <button onClick={this.add} name={index} value="1">A</button>
                        <button onClick={this.add} name={index} value="0">R</button>
                    </li> 
                )}
            </ul>
        );
    }
}
