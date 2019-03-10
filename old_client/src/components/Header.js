import React, { Component } from 'react';
import Textbox from './Textbox';
//import {addEvent, updateDaysLeft} from '../actions/actionCreators';
//import store from '../store';
import UserReg from './UserReg';
import axios from 'axios';


class Header extends Component{

    handleSave(events,id){
        console.log("saving to mongo- "+events+" "+id);
        axios({
           method:'post',
           url:'http://localhost:3001/updateEvents/',
           data:{
               events,
               id
           }
        })
        .then(response => {
            console.log(response+ " success to saving to DB");
        })
        .catch(err=>{
            console.log(err);
        });

       
       const test_data={
           events,
           id
       }
       console.log(test_data);
        

    }

    render(){
        console.log("passing to userReg"+this.props.user.name);
        return(
            <div className="header">
                <div className="header-text"> Happy Planning!</div>
                    <UserReg user={this.props.user.name}/>
                    <div className="options">options
                        <button onClick={()=> this.handleSave(this.props.events,this.props.user.id)}>Save</button>
                    </div>
            </div>
        );
    }
}

export default Header;