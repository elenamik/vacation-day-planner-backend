import React, { Component } from 'react';


class Event extends Component{
    
    render(){
        return(
            <div className="event-text">
                {this.props.text}
            </div>
        );  
    }
}

export default Event;