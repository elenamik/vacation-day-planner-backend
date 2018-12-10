import React, { Component } from 'react';

class Note extends Component{
    //note object, displaying inputted text
    render(){
        return(
            <div>{this.props.text}</div>
        );
    }
}

export default Note;