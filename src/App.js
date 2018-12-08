import React, { Component } from 'react';
import {generateRowData,getHolidayData,getDaysLeft} from './calendar-fns';
const month_names=['January','February','March','April','May','June','July','August','September','October','November','December'];
const day_names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/*
TODO:
1. see calendar functions for more work
4. the month header is like one pixel off :)) maybe add a border?
5. calculate days left
*/

class Event extends Component{
  render(){
    return (
    <div className="event">{this.props.text}
      </div>
    );
  }
}

//good
class Day extends Component{
  //event will become state
  render(){
    return(
      <td>
        {this.props.day_number}
        <Event text={this.props.event} w={this.props.day_off} />
      </td>
    );
  }
}

//good
class DayNameInHeader extends Component{
  render(){
    return(
      <th>{this.props.dayName}</th>
    );
  }
}

class Month extends Component{
  //good
  renderDayHeader(){
    const dayHeader=day_names.map((name,index) =>
       <DayNameInHeader key={index} dayName={name} />
    );
    return <tr className="day-header">{dayHeader}</tr>;
  }

  //good
  renderMonthHeader(){
    return(
    <div className="month-header">
        {month_names[this.props.month]}
        <div className="days-left-text">Days left: {this.props.days_left}</div> 
    </div>);
  }

  //good! :)
  renderRows(){
    const row_dict=generateRowData(this.props.month,this.props.year);
    let table_rows=[];
    console.log(this.props.event_dict[27]);
   
    for (let row_no=0;row_no<=5;row_no++){
      const row=row_dict[row_no].map((number,index)=>
          <Day key={index} day_number={number} event={this.props.event_dict[number]} 
          day_off={( index===0 || index===6 || this.props.event_dict[number]!=undefined ) ? true : false}/>
          );
      
      table_rows.push(<tr className="row" key={row_no}>{row}</tr>);
    }

    
    return table_rows;
  }
  
  render(){
    return(
      <div className="month">
        {this.renderMonthHeader()}
        <table>
          <tbody>
            {this.renderDayHeader()}
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state={
      days_left: getDaysLeft(),
      events: getHolidayData() //returns array of dict
    }
  }
  
  
  render(){
    const days_left=getDaysLeft();
    let month_array=days_left.map((days,index)=>
      <Month month={index} year="2018" key={index} days_left={this.state.days_left[index]} event_dict={this.state.events[index]}/>
    );

    return(
      <div className="calendar">
        {month_array}
      </div>);
  }
}


export default Calendar;
