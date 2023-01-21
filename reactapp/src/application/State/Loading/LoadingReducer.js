import * as actionType from "../actionTypes";

let INITIAL_STATE = {
    loading : false
}

let LoadingReducer = (previousState = INITIAL_STATE, action) => {

    switch (action.type) {        
        case actionType.SHOW_LOADING:
        console.log("Show Loading "+action.payload)
        return {...previousState, loading:action.payload};

        default:
            return previousState;
    }
}

export default LoadingReducer;