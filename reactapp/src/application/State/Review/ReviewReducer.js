import * as actionType from "../actionTypes";

const InitialState = {
    reviews:[]    
}



let reviewReducer = (state=InitialState, action)=>{  
    switch (action.type) {
        case actionType.REVIEW_SHOWREVIEW:  
            return  {...state, reviews : action.payload.reviews}
        default:
             return state;
    }
}

export default reviewReducer;
