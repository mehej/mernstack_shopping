import * as actionType from "../actionTypes";



export const addItemToCart = (item)=>({
    type: actionType.ADD_ITEM_CART,
    payload: {item}
})

export const emptyTheCart = () => ({
    type: actionType.EMPTY_CART
});

export const removeItem = (id) => ({
    type: actionType.REMOVE_ITEM_CART,
    payload: { id }
});

export const updateItem = (id, qty) => ({
    type: actionType.UPDATE_ITEM_CART,
    payload: {
        id, 
        qty: parseInt(qty) 
    }
});

export const saveCartToDb = (cart, userid)=>{

    console.log("Items To Be Saved", cart); 
    return function(dispatch) {     
        window.fetch("http://localhost:9000/cart/api/saveUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response ", usercartresponse);            
        })
        .catch((err)=>{           
            console.log("Error While Saving Cart", err);
        }) 
    }
}


export const getUserCart = (userid) => {

    return function(dispatch) {
        console.log("Get items");
        window.fetch("http://localhost:9000/cart/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response - get user cart ", usercartresponse);

            dispatch(emptyTheCart()); 

            for (const item of usercartresponse.cart) {
                console.log("item", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }                

        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}


export const deleteTheCart=(userid)=>{

    return function(dispatch) {
        console.log("delete cart");
        window.fetch("http://localhost:9000/cart/api/deleteUserCart",{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (dispatch(emptyTheCart())) 
        .catch((err)=>{
            console.log("Error While deleting cart", err)
        })
    }
}