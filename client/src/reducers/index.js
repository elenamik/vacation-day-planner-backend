import { combineReducers } from 'redux';

import events from './events';
import days_left from './days_left';
import user from './user';

const rootReducer = combineReducers({events,days_left,user});

export default rootReducer;

//plans for christmas week: understand the user account registration and router, and use those to build the frame of the app
//add the calendar component to actually flesh it out afterward!