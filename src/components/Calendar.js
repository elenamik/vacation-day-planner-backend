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
        console.log(days_left);
        const month_array=array.map((month_number,index)=>
            <Month  month_number={month_number} key={index} days_left={days_left[month_number]} events={this.props.events[month_number]}/>
        );

        return( 
        <div >
            {month_array}
        </div>
        );
       
    }
}

export default Calendar;