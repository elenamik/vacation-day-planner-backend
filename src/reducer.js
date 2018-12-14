import {ADD_NOTE} from './actions';

//let init_notes_list=[]; // array of dictionaries
let init_days_left=[];

    // for (let i=0; i<=11;i++){
    //     init_notes_list[i]={};
    //     init_days_left.push(2);
    // }  

const initialState={
    notes_list: [],
    days_left: init_days_left

}

export function CalendarApp(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
          return [
              ...state,
                  ]
                default:
                return state
 } 
}


