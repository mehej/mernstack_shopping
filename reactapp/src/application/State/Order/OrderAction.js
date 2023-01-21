import * as actionType from "../actionTypes";


export const SHOWORDERS = (orders)=>{
    return {
        type : actionType.ORDER_SHOWORDER,
        payload : {orders}
    }
}



export const saveOrderToDb = (cart, userid,timestamp)=>{
    console.log("order details", cart,userid,timestamp); 
    return function(dispatch) {     
        window.fetch("http://localhost:9000/order/api/saveOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart,orderedOn:timestamp})})
        .then (response => response.json())
        .then (userorderresponse => {
            console.log("response ", userorderresponse); 
            dispatch(getRecentOrder(userid))           
        })
        .catch((err)=>{           
            console.log("Error While Saving Order", err);
        }) 
    }
}

export const getRecentOrder = (userid)=>{
    console.log("get recent orders ");

    return function (dispatch) {       

        window.fetch("http://localhost:9000/order/api/getrecentorder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({userid:userid})})           
        
        .then(orderresp => orderresp.json())
        .then((orderresp)=>{
            console.log("recent order :  ", orderresp);            
            dispatch(SHOWORDERS(orderresp))

        })
        .catch((e)=>{
            console.log("Error While retrieving recent order", e)
        })
    }
};

export const deleteOrderFromDb=(orderid,userid)=>{

    return function(dispatch) {
        console.log("delete order");
        window.fetch("http://localhost:9000/order/api/deleteOrder",{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id:orderid})})
        .then (response => response.json()) 
        .then((orderresp)=>{
            console.log("cancelled order :  ", orderresp);            
            dispatch(getRecentOrder(userid))})        
        .catch((err)=>{
            console.log("Error While deleting order", err)
        })
    }
}


