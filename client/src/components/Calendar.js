import React, { Component } from 'react';
import Month from './Month';
import holidays from '../data/holidays';

/* 
 temporary logic
*/
const array=[];
for (let i=0;i<=11;i++){
    array.push(i);
}


class Calendar extends Component{
    render(){
        const month_array=array.map((month_number,index)=>
            <Month  month_number={month_number} key={index} year={2018} events={this.props.events[month_number]} holidays={holidays[month_number]}/>
        );
        return( 
        <div className="calendar">
            <div className="days-left">
                Days left: {this.props.days_left}
            </div>
            {month_array}
        </div>
        );
       
    }
}

export default Calendar;