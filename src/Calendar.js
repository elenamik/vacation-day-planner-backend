import React, { Component } from 'react';
import Month from './Month';

class Calendar extends Component{
    //render 12 months
    generateMonths(){
        let month_array=[];
        for (let i=0;i<=3;i++){
            month_array.push(i);
        }

        const month_component_array=month_array.map((number,index)=>
            <Month month_number={number} key={index} days_left="2"/>
        );
        return month_component_array;

    }

    render(){
        return(
            <div>{this.generateMonths()}</div>
        );
    }
}


export default Calendar;