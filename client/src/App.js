import React, { Component } from 'react';
import './styles/App.css';
//import Calendar from './Calendar';
import store from './store';
import {Provider} from 'react-redux';
import ReduxBoundApp from './components/reduxBoundApp';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxBoundApp />
      </Provider>
    );
  }
}

export default App;
