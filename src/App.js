import React, { Component } from 'react';
import './styles/App.css';
//import Calendar from './Calendar';
import store from './store';
import {Provider} from 'react-redux';
import ReduxBoundCalendar from './components/reduxBoundCalendar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="header">Header</div>
        <div className="side-panel">Side Panel</div>
        <ReduxBoundCalendar />
        <div className="footer">Footer</div>
      </Provider>
    );
  }
}

export default App;
