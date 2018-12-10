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
            note_list: ["hoy"],
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

    handleInput(text){
        console.log("ayy "+text);
        console.log(this.state);
        console.log(this.state.note_list);
                // let temp_note_list=this.state.note_list;
                // temp_note_list.push(text);
                // this.setState({
                //     being_edited: false,
                //     note_list: temp_note_list
                // });
                // console.log(this.state.note_list);

        
    }

    onSubmit = (fields) => {
       
        let temp=this.state.note_list;
        temp.push(fields["value"]);
        this.setState({
            note_list: temp,
            being_edited: false
        });

    }

    render(){
        console.log(this.state.note_list);
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
                    <div>being edited!</div>
                    <div><Textbox onSubmit={fields => this.onSubmit(fields)} handleInput={this.handleInput}/></div>
                </td>

            )
        }  
    }
}

export default Day;