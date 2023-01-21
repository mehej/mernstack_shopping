import * as actionType from "../actionTypes";

const InitialState = {
    StudentName : "Maya",
    StudentPass : "Happy123",
    SessionAddress :"fremont",
    StudentSession :"Mernstack"
}

let StudentReducer = (state=InitialState, action)=>{  
    switch (action.type) {
        case actionType.STUDENT_ADDSTUDENT:                
                return action.payload;
        default:
             return state;
    }
}

export default StudentReducer;
