import React, { Component } from 'react';
import Calendar from './Calendar';



class Handler{
// will handle messages for update for day
// update state for month

    static StaticMethod(){
    return "test";
    }

    static updateEventList(){
    // called by form with appropriate data
    }

    static calculateDaysLeft(){
    // if there is a change in days left, send change to month(s)
    }

    static sendUpdate(){

    }
}


class App extends Component{
    // render(){
    //     return(
    //         <div>testing</div>
    //     );
    // }
    render(){
        return(
            <Calendar />
        );
    }

}


export default App;