import {ADD_EVENT,UPDATE_DAYS_LEFT,UPDATE_USER, LOAD_EVENTS_FROM_DB, FLUSH} from './actionConstants';

export function addEvent(month,day,text) {
    return { 
        type: ADD_EVENT,
        month: month,
        day: day,
        text: text,
    }
}

export function updateDaysLeft(month){
    return {
            type: UPDATE_DAYS_LEFT,
            month: month,
    }
}

export function updateUser(name,id){
    return{
        type: UPDATE_USER,
        user:{
            name,
            id
        }
        
    }
}

export function loadEventsFromDB(events){
    return{
        type: LOAD_EVENTS_FROM_DB,
        events
    }
}

export function flush(){
    return{
        type: FLUSH
    }
}