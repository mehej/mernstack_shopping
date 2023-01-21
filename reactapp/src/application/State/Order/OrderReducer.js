import * as actionType from "../actionTypes";

const InitialState = {
    orders:[]    
}



let OrderReducer = (state=InitialState, action)=>{  
    switch (action.type) {
        case actionType.ORDER_SHOWORDER:  
            return  {...state, orders : action.payload.orders}
        default:
             return state;
    }
}

export default OrderReducer;
