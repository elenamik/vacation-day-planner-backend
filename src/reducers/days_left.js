import {UPDATE_DAYS_LEFT} from '../actions/actionConstants';

function recursiveSubtract(index,days_left){
    console.log("at index: "+index);
    if (index < 0){
        return -1;
    }
    else if (days_left[index]>0){
         return index;
    }

    else{
        return recursiveSubtract(index-1,days_left);
    }
 }



function days_left(days_left = [], action) {
   
    switch(action.type){
        case UPDATE_DAYS_LEFT:
            const decrement_at_index=recursiveSubtract(action.month,days_left);
            // console.log("decrements at "+decrement_at_index);
            if (decrement_at_index<0){
                // console.log("no more days left ~ no change in days left");
                return days_left;
            }
            else{
                // console.log(days_left.slice(0,decrement_at_index));
                // console.log( days_left[decrement_at_index]-1);
                // console.log(days_left.slice(decrement_at_index+1));

                return [
                    ...days_left.slice(0,decrement_at_index),
                    days_left[decrement_at_index]-1,
                    ...days_left.slice(decrement_at_index+1)
                ];
            }
            
        default:
            return days_left;
    }
}

export default days_left;



// function events(events = {}, action) {
//     const month=action.month;
//     const day=action.day;
//     const text=action.text;
//     switch(action.type){
//         case ADD_EVENT:
//             return {
//                 ...events, [month]:{...events[month], [day]:text}
//             };
    
//         default:
//             return events;
//     }
// }
