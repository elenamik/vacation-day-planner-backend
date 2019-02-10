import React, { Component } from 'react';


class User extends Component {
    render() {
       return(
        <div>
            <span>
                {this.props.name}     {this.props.password}
            </span>
        </div>
       );
    }
}

export default User;
