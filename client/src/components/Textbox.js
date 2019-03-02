import React, { Component } from 'react';

class Textbox extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress= this.keyPress.bind(this);
     }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
        
    }
    keyPress(event){
        if(event.keyCode == 13){
            event.preventDefault();
            this.props.onSubmit(this.state.value);
            this.setState(
                {value:''}
            );
            return;
        }
      }

    render(){
        return(
            <form > 
                <input type="text" value={this.state.value} className={this.props.class}
                onKeyDown={this.keyPress} onChange={this.handleChange}/>
            </form>
        );
    }
    
}
export default Textbox;