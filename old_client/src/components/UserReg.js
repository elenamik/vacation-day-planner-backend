import React, { Component } from 'react';
import Textbox from './Textbox';
//import {addEvent, updateDaysLeft} from '../actions/actionCreators';
import store from '../store';
import {updateUser, loadEventsFromDB, flush} from '../actions/actionCreators';
import axios from 'axios';



class UserReg extends Component{

    fetchUserInfo(input){
        return axios.get(`http://localhost:3001/getUserInfo/${input}`)
        .then(response =>{
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });

    }

    async onSubmit(input){
        console.log("submitted "+input);
        const user_data=await this.fetchUserInfo(input)
        console.log("sending to reducer: "+user_data.name+user_data._id);
        
        // dispatch user and events to state
        store.dispatch(updateUser(user_data.name,user_data._id));
        console.log(user_data.events);
        store.dispatch(flush())
        store.dispatch(loadEventsFromDB(user_data.events));
   }

    render(){
        console.log(this.props.user);
        if (!this.props.user){
            return(
            <div className="user-reg">
                <div className="username-text">username</div>
                <div><Textbox class="username-input" onSubmit={input => this.onSubmit(input)}/></div>
                <div className="password-text">password</div>
                <div><Textbox class="password-input" onSubmit={input => this.onSubmit(input)}/></div>
                <div className="userid">not logged in</div>
            </div>
            );
        }
        else{
            return(
                <div className="user-reg">
                    <div className="username-text">username</div>
                    <div><Textbox class="username-input" onSubmit={input => this.onSubmit(input)}/></div>
                    <div className="password-text">password</div>
                    <div><Textbox class="password-input" onSubmit={input => this.onSubmit(input)}/></div>
                    <div className="userid">logged in as {this.props.user}</div>
                </div>
            );
            
        }

    }
}

export default UserReg;