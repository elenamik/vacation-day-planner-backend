import React, { Component } from 'react';
import Textbox from './Textbox';
import {addEvent, updateDaysLeft} from '../actions/actionCreators';
import store from '../store';


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
        store.dispatch(updateDaysLeft(this.props.month_number));
    }


    handleClick(){
        this.setState({being_edited:true});
    }
    
    render(){
        if (!this.state.being_edited){
            return(
                <td onClick={()=>this.handleClick()}>
                    {this.props.day_number}
                    <div className="event-text">
                        {this.props.text}
                    </div>
                    
                </td>
            );
        }
        else{
            return(
                <td>
                    {this.props.day_number}
                    <div><Textbox onSubmit={input => this.onSubmit(input)}/></div>
                </td>

            )
        }  
    }
}

export default Day;