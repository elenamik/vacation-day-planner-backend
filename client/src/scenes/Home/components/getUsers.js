import React, { Component } from 'react';
import axios from 'axios';
import User from '../../../components/User';



class GetUsers extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false,
            data:undefined
        }
    }

    async componentDidMount(){
        const users = await this.fetchUsers();
        this.setState({
            data:users
        })
    }

    async fetchUsers(){
        return axios.get('http://localhost:3001/getUsers')
        .then(response =>{
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
    }

    async handleGetUsers(){
        this.setState({
            clicked:true
        });
    }

    printUsers(){
        const usersJSON=this.state.data;
        const user_array=usersJSON.map((user,index)=>
            <User name={user.name} password={user.password} key={index}/>
        );

        return user_array;
    }

    render() {
        if(this.state.clicked){
            return(
                <div>
                    <button onClick={() => this.handleGetUsers}>
                    Get Users
                    </button>
                    {this.printUsers()}
                </div>
            );
        }
        if (!this.state.clicked){
            return (
                <button onClick={() => this.handleGetUsers()}>
                Get Users
                </button>
            );
        }

    }
    }

export default GetUsers;
