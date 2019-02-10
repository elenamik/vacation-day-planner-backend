import React, { Component } from 'react';
import Calendar from './Calendar';
import Header from './Header';



class LandingPage extends Component{
    render(){
        console.log(this.props)
        return(
        <div class="landing-page">
            <Header user={this.props.user} events={this.props.events}/>
            <div className="side-panel">Side Panel</div>
            <Calendar events={this.props.events} days_left={this.props.days_left}/>
            <div className="footer">Footer</div>
        </div>
        );
    }
}
export default LandingPage;