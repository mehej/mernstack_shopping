import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../State/Cart/CartAction";

let CartHook = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer)
    let User = useSelector((state)=>state.userReducer);

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;

        for(let item of cartItems) {
            amount += item.qty * item.Price;
            count  += item.qty; 
        }

        return {
            amount, 
            count 
        }
    }

    let navigate = useNavigate();
    let func = function(event) {      

        navigate('/checkout');
        event.preventDefault();
    }

    let dispatchToSaveCart = useDispatch();
    let clickToSaveCart = (cart, userid)=>{
        if (!userid) {
            alert("Please login to save the cart!!!");
            navigate('/user');
        } else {
            dispatchToSaveCart(saveCartToDb(cart, userid))    
        }

    }

    return(
        <Fragment>
            {props.readOnly ?"" : <h1>Cart Component</h1>}
            {cartList && cartList.length > 0 ? 
                <Fragment>
                <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                {
                                    props.readOnly ?  "" : 
                                    <Fragment>
                                <th>Description</th>
                                <th>Rating</th>
                                </Fragment>
                                }
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                {
                                    props.readOnly ?  "" : 
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                   
                                    return <CartItem 
                                                    item={item}
                                                    key={item._id}
                                                    readOnly = {props.readOnly}
                                        />
                                })
                            } 
                        </tbody>
                    </table>
                    {
                        props.readOnly ? "" :  
                    <CartSummary data={recalculate(cartList)} readOnly={props.readOnly}/>
                    }
                   {
                        props.readOnly ? "" :  
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, User._id)} >
                                        Save Cart
                                </button>

                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </Fragment> 
                : 
                <b>Cart Is Empty!!! Please add some items.</b>}               

        </Fragment>
    )

}
export default CartHook;
