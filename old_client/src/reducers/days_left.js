import {UPDATE_DAYS_LEFT} from '../actions/actionConstants';


function days_left(days_left = 20, action) {
    switch(action.type){
        case UPDATE_DAYS_LEFT:
            return days_left-1;
        default:
            return days_left;
    }
}

export default days_left;

