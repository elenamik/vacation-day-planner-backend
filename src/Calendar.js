import React, { Component } from 'react';
import Month from './Month';
import {CalendarApp} from './reducer';
import {addNote} from './actions';
import {ADD_NOTE} from './actions';


let init_days_left=[];
let init_notes_list=[];
for (let i=0; i<=11;i++){
    init_notes_list[i]={};
    init_days_left.push(2);
} 
const initialState={
    notes_list: init_notes_list,
    days_left: init_days_left
}

let state=initialState;
//console.log(addNote("new note").type);
//console.log(CalendarApp(addNote("new note")));


class Calendar extends Component{
    constructor(props){
        super(props);
        //initialize notes data to empty dictionaries
        let init_notes_list=[]; // array of dictionaries
        let init_days_left=[];

        for (let i=0; i<=11;i++){
            init_notes_list[i]={};
            init_days_left.push(2);
        }  
        this.state={
            notes_list: init_notes_list,
            days_left: init_days_left
        }
    }

    updateNoteList(month,day,text,day_type){
        const action={
            type: ADD_NOTE, 
            month: month, 
            day: day,
            
        }

        
        console.log(test_add_state(state,action));

        let temp=this.state.notes_list[month];
        if (temp[day] == undefined){
            temp[day]=[text];
        }
        else{
            temp[day].push(text);
        }
        
        this.state.notes_list[month]=temp;
        //this.updateDaysLeft(month,type);

        if (day_type != "weekend"){
            let data=this.recursiveSubtract(month); //returns [month index, new val]

            if (!data){
                console.log("no more days!") // event should show up red or something (valid day?)
            }
            else{
                //console.log("month index: "+data[0]+" new value: "+data[1]);
                this.state.days_left[data[0]]=data[1];
                this.forceUpdate();
            }
        }
    }

    recursiveSubtract(index){
       if (index < 0){
           return undefined;
       }
       else if (this.state.days_left[index]>0){
            return ([index,(this.state.days_left[index]-1)]);
       }
       else{
           return this.recursiveSubtract(index-1);
       }
    }


    updateDaysLeft(month,type){
        if (type != "weekend"){
            let data=this.recursiveSubtract(month); //returns [month index, new val]

            if (!data){
                console.log("no more days!") // event should show up red or something (valid day?)
            }
            else{
                //console.log("month index: "+data[0]+" new value: "+data[1]);
                this.state.days_left[data[0]]=data[1];
                this.forceUpdate();
            }
        }
    }


    //render 12 months
    generateMonths(){
        let month_array=[];
        for (let i=0;i<=11;i++){
            month_array.push(i);
        }

        const month_component_array=month_array.map((number,index)=>
            <Month 
                month_number={number} 
                key={index} 
                days_left={this.state.days_left[number]}
                updateNoteList={(month,day,text)=>this.updateNoteList(month,day,text)}
            />
        );
        return month_component_array;

    }

    render(){

        return(
            <div>{this.generateMonths()}</div>
        );
    }
}

//let init_notes_list=[]; // array of dictionaries


function test_add_state(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ADD_NOTE:
          return [
              ...state,
                  ]
        default:
            return state
 } 
}


export default Calendar;