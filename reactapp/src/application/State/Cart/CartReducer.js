import * as actionType from "../actionTypes";

const INITIAL_STATE = []


export default function CartReducer(state = INITIAL_STATE, action) 
{
    console.log("cart Reducer", state, action);
    

    switch(action.type) 
    {
        case actionType.ADD_ITEM_CART:
           
            let newState = state.filter(item => item._id != action.payload.item._id);           
            !action.payload.item["qty"] ? action.payload.item["qty"] = 1 : "";

            return [...newState, action.payload.item];

         
        case actionType.REMOVE_ITEM_CART:
            return state.filter(item => item._id!=action.payload.id)

    
        case actionType.EMPTY_CART:
            return [];

       
        case actionType.UPDATE_ITEM_CART:
            return state.map((item)=>{
                if (item._id == action.payload.id) { 
                    return {...item, qty:action.payload.qty} 
                }
                return item;
            })

        default:
            return state;
    }
}
