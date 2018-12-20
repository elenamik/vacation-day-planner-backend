import {createStore} from 'redux';
import rootReducer from './reducers/index';
import days_left from './data/days_left.js';
import events from './data/events.js';



// create an object for the default data
const defaultState = {
  events,
  days_left
};

const store = createStore(rootReducer, defaultState);

export default store;