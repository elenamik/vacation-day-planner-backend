import React, { Component } from 'react';
import AddUser from './components/addUser';
import GetUsers from './components/getUsers';

class App extends Component {
    render(){
        return(
            <div>
                <GetUsers />
                <AddUser />
            </div>
        )

    }
    

}

export default App;
