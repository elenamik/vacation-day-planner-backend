import React, { Component } from 'react';
import {generateRowData,getHolidayData,getDaysLeft} from './calendar-fns';
import EventForm from './form';
const month_names=['January','February','March','April','May','June','July','August','September','October','November','December'];
const day_names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


class Event extends Component{
  render(){
    return (
    <div className="event">{this.props.text}
      </div>
    );
  }
}

class Day extends Component{
  constructor(props){
    super(props);
    this.state={
      being_edited: false,
      inputted_event:""
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.keyPress=this.keyPress.bind(this);
  }

  handleClick(){
    this.setState({being_edited: true});
  }
  
  handleChange(event){
    this.setState({inputted_event: event.target.value});
  }

  keyPress(e){
    if(e.keyCode == 13){
       this.setState({being_edited: false});
       this.props.updateSavedEvents(this.props.month,this.props.day_number,e.target.value);
    }
  }

  generateAllEvents(){
    let event_object_array=this.props.event_dict[this.props.day_number].map((event,index)=>
    <Event text={event} />
    );
  
  
    // console.log(this.props.event_dict[this.props.day_number]);
    // for (let key in this.props.event_dict){
    //   event_object_array.push(<Event text={this.props.event_dict[key]}/>);
    //   console.log(event_object_array);
    // }
    return event_object_array;

  }
  render(){
    if (!this.state.being_edited){
      return(
        <td onClick={() => this.handleClick()}>
          {this.props.day_number}
          <div>{this.generateAllEvents}</div>
        </td>
      );
    }
    else{
     
      return(
        <td>
          {this.props.day_number}
          <div>{this.generateAllEvents}</div>
          <Event text={this.props.event_array} w={this.props.day_off} />
          <form>
            <input type="text" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange.bind(this)}/>
          </form>
        </td>
      );
    }
  }
}



class Month extends Component{
  renderDayHeader(){
    const dayHeader=day_names.map((name,index) =>
      <th key={index}>{name}</th>
    );
    return <tr className="day-header">{dayHeader}</tr>;
  }

  renderMonthHeader(){
    return(
    <div className="month-header">
        {month_names[this.props.month]}
        <div className="days-left-text">Days left: {this.props.days_left}</div> 
    </div>);
  }

  renderRows(){
    const row_dict=generateRowData(this.props.month,this.props.year);
    let table_rows=[];
    
   
    for (let row_no=0;row_no<=5;row_no++){
      const row=row_dict[row_no].map((number,index)=>
          <Day month={this.props.month} key={index} day_number={number} event_array={this.props.event_dict[number]} 
          day_off={( index===0 || index===6 || this.props.event_dict[number]!=undefined ) ? true : false}
           updateSavedEvents={this.props.updateSavedEvents}/>
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
      days_left: getDaysLeft(), // array of number
      saved_events: getHolidayData() //returns array of dictionaries
    }
    this.updateSavedEvents=this.updateSavedEvents.bind(this);
  }
  
  updateSavedEvents(month,day,text){
    // need month,day,and text
    let working_dict=this.state.saved_events[month];
    if (working_dict[day] == undefined){
      working_dict[day]=[text];
    }
    else{
      working_dict[day].push(text);
    }
    this.state.saved_events[month]=working_dict;
    this.forceUpdate();

   
  }
  render(){
    const days_left=getDaysLeft();
    let month_array=days_left.map((days,index)=>
      <Month month={index} year="2018" key={index} days_left={this.state.days_left[index]} 
      event_dict={this.state.saved_events[index]} updateSavedEvents={this.updateSavedEvents}/>
    );

    return(
      <div className="calendar">
        {month_array}
      </div>);
  }
}


export default Calendar;
