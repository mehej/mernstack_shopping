import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCoupon } from "../../State/Coupon/CouponAction";


let Coupon = (props) => {
    
    //reading from user reducer using react-redux hook - useSelector
    //below code allows us the access of any store's state here is 
    let coupon = useSelector((state) => state.couponReducer.coupon); //inside implements mapStateToProps for one state
    let user = useSelector((state) => state.userReducer); //inside implements mapStateToProps for one state

    let dispatchCoupon = useDispatch(); // using this hook to dispatch the addCouponToStore action : publisher
    
    let addCouponClick = ()=>{
        let coupon = Math.ceil(Math.random()*100000);       
        dispatchCoupon(addCoupon(coupon));
    }

    let navigate = useNavigate();

    let func = function(event) {
        
        navigate('/checkout');
        event.preventDefault();
    }

    

    return(
        <section className={"componentClass"}>
            <h1>Generate Coupon</h1>
            <div className="col-md-8">
                <div className="col-md-12">
                    <b>Hi, {user.userName != "" ? user.userName: ""}</b>
                    {coupon ?                    
                    <p>Your Generated Coupon is : 
                    <b>{coupon}</b></p> : 
                    <p>Please Click on Generate Button to Generate the Coupon ID</p>
                    }                    
                </div>                
                <button onClick={addCouponClick} >Generate</button>
                <button onClick={func}>Go To Checkout</button>                
            </div>           
        </section>
    )
}

export default Coupon;