import {UPDATE_USER} from '../actions/actionConstants';

function user(user={name:"",id:""},action){
    switch(action.type){
        case UPDATE_USER:
            console.log("id is "+ action.user.id);
            return {
                ...user,
                name:action.user.name,
                id:action.user.id
            };
        
        default:
            return user;
    }
    
}

export default user;