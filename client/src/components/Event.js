import React, { Component } from 'react';


class Event extends Component{
    
    render(){
        if (this.props.type==="holiday"){
            return(
                <div className="holiday-text">
                {this.props.text}
            </div>
            )
        }
        else{
            return(
                <div className="event-text">
                    {this.props.text}
                </div>
            );  
        }
    }
}

export default Event;