import React, { Component } from 'react';
import Calendar from './Calendar';



// class Handler{
// // will handle messages for update for day
// // update state for month

//     constructor(){
//         //initialize notes data to empty dictionaries
//         init_notes_list=[];
//         init_days_left=[];
//         for (let i=0; i<=11;i++){
//             init_notes_list[i]={};
//             init_days_left.push("4");
//         }  
//         this.state= {
//             notes_list: init_notes_list,
//             days_left: init_days_left
//         }
//     }

//     static StaticMethod(){
//         return "test";
//     }

//     static updateEventList(){
//     // called by form with appropriate data
//     }

//     static calculateDaysLeft(){
//     // if there is a change in days left, send change to month(s)
//     }

//     static sendUpdate(month,days_left){

//     }
// }


class App extends Component{
    render(){
        return(
            <Calendar />
        );
    }

}


export default App;