import React, { Component } from 'react';
import axios from 'axios';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit= (event) =>{
    event.preventDefault();
    axios.post(`http://localhost:3001/addUser/${this.state.username}`)
    .then( response =>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    });

  }
  render() {
    return (
          <form onSubmit={this.handleSubmit}>
              <button type="submit">Add User</button>
              <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          </form>
    );
  }
}

export default AddUser;
