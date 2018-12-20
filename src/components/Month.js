import React, { Component } from 'react';
import Day from './Day';
import month_name from '../data/month_name.js';


/* 
 start of temporary logic
*/

const array=[];
for (let i=1;i<=30;i++){
    array.push(i);
}

/* 
 end of temporary logic
*/


class Month extends Component{
    render(){
        const month_number=this.props.month_number;
        const day_array=array.map((day_number,index)=>
            <Day day_number={day_number} key={index} month_number={month_number} text={this.props.events[day_number]}/>
        );

        return( 
        <div>
            <h1>{month_name[month_number]}</h1>
            <h2>days left: {this.props.days_left}</h2>
            {day_array}
        </div>
        );
       
    }
}

export default Month;