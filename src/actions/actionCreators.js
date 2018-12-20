import {ADD_EVENT,UPDATE_DAYS_LEFT} from './actionConstants';

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

