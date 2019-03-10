import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
      })
    }  

    async handleSubmit(event){
      event.preventDefault();
      console.log('registering user! '+this.state.username+" "+this.state.password);
      await axios({
          method:'post',
          url:'http://localhost:3001/register/',
          data:{
              username:this.state.username,
              password:this.state.password
          }
      })
      .then(response=>{
          console.log(response.data.message);
      })
      .catch(err=>{
          console.log(err);
      })
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={event=> this.handleSubmit(event)}>
          <input type="text" name="username" value={this.state.value} onChange={this.handleInputChange}/>
          <input type="text" name="password" value={this.state.value} onChange={this.handleInputChange}/>
          <input type="submit" onSubmit={event=> this.handleSubmit(event)}/>
        </form>
      </div>
    );
  }
}

export default Login;
