import * as actionType from "../actionTypes";

const InitialState = {
    Products:[],
    defaultProduct : { 
    Name : "Soap",
    Price : "3",
    Description :"Cosmetic",
    Rating :"5"
   }
}



let ProductReducer = (state=InitialState, action)=>{  
    switch (action.type) {
        case actionType.PRODUCT_ADDPRODUCT:                
               return  {...state, Products : action.payload.products}
        default:
             return state;
    }
}

export default ProductReducer;
