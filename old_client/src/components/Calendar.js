import React, { Component } from 'react';
import Month from './Month';
/* 
 temporary logic
*/
const array=[];
for (let i=0;i<=11;i++){
    array.push(i);
}


class Calendar extends Component{
    render(){
        const days_left=this.props.days_left;
        console.log(this.props)
        const month_array=array.map((month_number,index)=>
            <Month  month_number={month_number} key={index} days_left={days_left[month_number]} year={2018} events={this.props.events[month_number]}/>
        );
        return( 
        <div className="calendar">
            {month_array}
        </div>
        );
       
    }
}

export default Calendar;