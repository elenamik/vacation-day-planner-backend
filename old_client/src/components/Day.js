import React, { Component } from 'react';
import Textbox from './Textbox';
import {addEvent, updateDaysLeft} from '../actions/actionCreators';
import store from '../store';
import Event from './Event';


class Day extends Component{
    constructor(props){
        super(props);
        this.state={
            being_edited:false
        }
    }
    onSubmit = (field) => {
        this.setState({being_edited:false});
        store.dispatch(addEvent(this.props.month_number,this.props.day_number,field));
        if (this.props.holiday===undefined & (this.props.index%7)>=1 & (this.props.index%7)<=5 & (!this.getEvents())) {
            store.dispatch(updateDaysLeft());
        }
        
    }

    handleClick(){
        this.setState({being_edited:true});
    }

    getEvents(){
        const event_array=this.props.text;
        if (event_array){
            const Event_array=event_array.map((text,index)=>
            <Event text={text} key={index} type={"user"}/>
            );
            return Event_array;
        }
        else{
            return false;
        }
    }
    getHoliday(){
        if (this.props.holiday){
            return <Event text={this.props.holiday} type={"holiday"}/>
        }
    }

    render(){
        if (!this.props.day_number){
            return (
                <td></td>
            );
        }

        else if (!this.state.being_edited){
            return(
                <td onClick={()=>this.handleClick()}>
                    {this.props.day_number}
                    {this.getEvents()}
                    {this.getHoliday()}
                </td>
            );
        }
        else{
            return(
                <td>
                    {this.props.day_number}
                    {this.getEvents()}
                    {this.getHoliday()}
                    <div><Textbox onSubmit={input => this.onSubmit(input)} class="event-input"/></div>
                </td>

            )
        }  
    }
}

export default Day;