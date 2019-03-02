import React, { Component } from 'react';
import Day from './Day';
import month_name from '../data/month_name.js';
import day_name from '../data/day_name.js';

/*
temp logic:
*/

const arr=[];
for (let i=0;i<=6;i++){
    arr.push(i);
}

/*
end of temp logic:
*/


function generateDayNumbers(month,year){
    const first_day = new Date(year, month, 1).getDay(); //returns number of day
    const max_day= new Date(year, month+1, 0).getDate(); // return max number of days
    const day_array=[];
    let iterator=0;
    while (iterator<first_day){
        day_array.push("");
        iterator++;
    }
    for (let i=1;i<=max_day;i++){
        day_array.push(i);
        iterator++;
    }

    const empty_buffer=35-iterator;
    for(let i=0; i<=empty_buffer;i++){
        day_array.push("");
    }

    return day_array;
}


class Month extends Component{
    render(){
        
        const day_numbers=generateDayNumbers(this.props.month_number,this.props.year);
        const month_number=this.props.month_number;
        const day_array=day_numbers.map((day_number,index)=>
        
            <Day day_number={day_number} index={index} key={index} month_number={month_number} text={this.props.events[day_number]} holiday={this.props.holidays[day_number]}/>
        );

        const day_names_array=arr.map((number,index) =>
            <th key={index}>
                {day_name[number]}
            </th>
        );


        return( 
        <div className="month">
            <div className="month-header">
                <div className="month-name">{month_name[month_number]}</div>
            </div>
          
            <table>
                <tr>{day_names_array}</tr>
                <tr>{day_array.slice(0,7)}</tr>
                <tr>{day_array.slice(7,14)}</tr>
                <tr>{day_array.slice(14,21)}</tr>
                <tr>{day_array.slice(21,28)}</tr>
                <tr>{day_array.slice(28,35)}</tr>
            </table>
           
        </div>
        );
       
    }
}

export default Month;