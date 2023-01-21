import React from "react";

const CartSummary = (props)=>{
    let {
        count,
        amount
    } = props.data;


    return(
        <div>
            {props.readOnly ? <h5> Cart Summary </h5> : <h2> Cart Summary </h2>}
            <p> Total: ${amount} </p>
            <p> Number of items in cart : {count} </p>
        </div>
    )
}

export default CartSummary;