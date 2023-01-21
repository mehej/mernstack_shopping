import * as actionType from "../actionTypes";

const InitialState = {
    userName : "",
    password : "",
    street : "",
    mobile : ""
}

//create a reducer

let UserReducer = (state=InitialState, action)=>{
    //console.log("User Reducer", action)
    switch (action.type) {
        case actionType.USER_ADDUSER:                
            return action.payload;
        case actionType.USER_LOGOUT:
            return {};
           
        default:
             return state;
    }
}

export default UserReducer;
