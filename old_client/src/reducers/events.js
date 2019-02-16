import {ADD_EVENT,LOAD_EVENTS_FROM_DB,FLUSH} from '../actions/actionConstants';
//import update from 'immutability-helper';
import empty_events from '../data/events';

//have some reducer composition for modifying state(refs). display events through props(?)

//make more than one even addable later on - store by unique ID, day, and text :)
/* events: {
    0:{ 
        1:"new years day",
        15:"mlk day"
    },
    1:{},
    2:{},
    3:{},
    ....
    11:{}}
*/

//anytime an event is changed, save this to mongodb
function events(events = {}, action) {
    const month=action.month;
    const day=action.day;
    const text=action.text;
    switch(action.type){
        case FLUSH:
            console.log("flushing");
            return empty_events;
        case ADD_EVENT:
            
            if (events[month][day]){ ///day already has something, add to exisiting array
                let event_array=events[month][day];
                return {
                    ...events, [month]:{...events[month], [day]:[...event_array,text]}
                };
            }
            else{
                return {
                    ...events, [month]:{...events[month], [day]:[text]}
                };
            }

            // add method to save to mongoDB whenever there is a change
          
        case LOAD_EVENTS_FROM_DB:
            return {
                ...events,
                ...action.events[0]
            }

        default:
            return events;
    }
}

    export default events;