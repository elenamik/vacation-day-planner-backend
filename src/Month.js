import React, { Component } from 'react';
import Day from './Day';

const month_name=['January','February','March','April','May','June','July','August','September','October','November','December'];


class Month extends Component{
    // render 30 days
    // state: days_left -> updated by setState(handlerfunc)
    
    updateNoteList(day,text,type){
        this.props.updateNoteList(this.props.month_number,day,text,type);
    }

    calculateType(index){
        if(index==0 || index== 7){
            return "weekend";
        }
        else{
            return "weekday";
        }
        
    }

    generateDays(){
        let day_array=[];
        for (let i=0;i<=7;i++){
            day_array.push(i);
        }



        const day_component_array=day_array.map((number,index)=>
            <Day 
            key={index} 
            day_number={number}
            updateNoteList={(day,text,type)=>this.updateNoteList(day,text,type)}
            type={this.calculateType(index)}
            />
        );
        return day_component_array;

    }

    render(){
       
    
    return(
        <div>
            <div className="month-header">{month_name[this.props.month_number]}
                <div className="days-left-text">{this.props.days_left}</div>
            </div>
            <tr>{this.generateDays()}</tr>
        </div>
       
    );
    }
}

export default Month;