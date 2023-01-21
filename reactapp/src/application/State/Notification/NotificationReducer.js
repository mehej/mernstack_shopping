import * as actionType from "../actionTypes";

const InitialState = {
    notifications:[]    
   }




let NotificationReducer = (state=InitialState, action)=>{  
    switch (action.type) {
        case actionType.ADD_NOTIFICATIONS:                
               return  {...state, notifications : action.payload.notifications}
        default:
             return state;
    }
}

export default NotificationReducer;
