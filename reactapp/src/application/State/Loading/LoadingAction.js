import * as actionType from "../actionTypes";


//loading action
export const loading = (showHide) => ({        
    type: actionType.SHOW_LOADING,
    payload: showHide
});