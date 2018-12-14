import React, { Component } from 'react';
import Note from './Note'
import Textbox from './Textbox';


class Day extends Component{
    // render events
    // will store as props in array
    // onclick:
    //      state: being_updated -> renders form.js
    // will send change to handler
    constructor(props){
        super(props);
        this.state={
            note_list: [],
            being_edited: false
        }
    }

    generateNotes(){
        const note_component_array=this.state.note_list.map((text,index)=>
            <Note text={text} key={index}/>
        );
        return note_component_array;
    }
    
    handleClick(){
        this.setState({
            being_edited: true
        });

    }

    onSubmit = (field) => {
        let temp=this.state.note_list;
        temp.push(field);
        this.setState({
            note_list: temp,
            being_edited: false
        });
  
        this.props.updateNoteList(this.props.day_number,field,this.props.type);

    }

    render(){
        if (!this.state.being_edited){
            return(
                <td onClick={()=>this.handleClick()}>
                    {this.props.day_number}
                    {this.generateNotes()}
                </td>
            );
        }
        else{
            return(
                <td>
                    {this.props.day_number}
                    {this.generateNotes()}
                    <div><Textbox onSubmit={input => this.onSubmit(input)}/></div>
                </td>

            )
        }  
    }
}

export default Day;