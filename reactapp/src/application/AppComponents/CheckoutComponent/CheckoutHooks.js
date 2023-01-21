import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartHook from "../CartComponent/CartHooks";
import CartItem from "../CartComponent/CartItemComponent";
import {NavLink,useNavigate} from "react-router-dom";
import { saveOrderToDb } from "../../State/Order/OrderAction";
import {emptyTheCart} from "../../State/Cart/CartAction";
import {deleteTheCart} from "../../State/Cart/CartAction";
import {saveNotificationToDb} from "../../State/Notification/NotificationAction";

let CheckoutHook = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer);
    let User = useSelector((state)=>state.userReducer);
    let coupon = useSelector((state) => state.couponReducer.coupon);
    let currentDateTime=Date().toLocaleString();

    let recalculate = (cartItems)=>{
        let amount = 0;
        for(let item of cartItems) {
            amount += item.qty * item.Price;           
        }
        return  amount; 
    }

    const [showMessage, setShowMessage] = useState(false);
    const [checkout, makePayment] = useState(true);
   // const [discount,setDiscount]=useState(0);

   // let dispatchToEmptycart = useDispatch();

    
    
    let dispatchToSaveOrder = useDispatch();
    let dispatchToSaveNotification=useDispatch();
    let makePaymentClick = (cart, userid,timestamp)=>{
        if (!userid) {
            alert("Please login to make payment!!!");
            navigate('/user');
        } else {
            dispatchToSaveOrder(saveOrderToDb(cart, userid,timestamp));
            dispatchToSaveNotification(saveNotificationToDb(userid,"New order has been placed"));
        }

        makePayment(!checkout);
        deleteCart(userid);

    }
    let dispatchTodeleteCart = useDispatch();
    let deleteCart=(userid)=>{

        dispatchTodeleteCart(deleteTheCart(userid));


    }

    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/home');
        event.preventDefault();
    }

    let discount=(coupon)=>{
        if (coupon)
        return recalculate(cartList)/5;
        else 
        return 0;
    }   

    let tax=(recalculate(cartList)-discount(coupon))/10;   
    let total=((recalculate(cartList)-discount(coupon))+tax).toFixed(2);
        



    return(
        
        <>
        {checkout?
        <>
            <h2>Checkout Page</h2>            
        <div>
            <div className="col-md-7"><CartHook readOnly={true}> </CartHook>
            <hr/>
            <label>Discount <span className={"total-right"}>${discount(coupon)}</span></label><br/>
            <label>Sales Tax <span className={"total-right"}>${tax}</span></label>
            <hr/>            
            <label><b>Total  :</b><span className={"total-right"}>${total}</span></label>
            <hr/>
            </div>
            <div className="col-md-12">
                      
            <h4>Shipping Address : </h4>
                <div>
                    <i >{User.userName}</i><br></br>
                    <i >{User.street}</i> 
                    <hr />
                        {coupon ? 
                            <p>Coupon has been successfully applied  : <b>
                            <div className="hoverDiv" onMouseEnter={() => {setShowMessage(true);}}
                             onMouseLeave={() => {setShowMessage(false);}}>
                            {coupon}{showMessage && <h4>Wow! You got a 20% discount coupon.</h4>}
                             </div></b></p>                            
                            :<p><b>Have a coupon ? Enter the code here <input type="text"/> If not, click get coupon .</b>
                                <NavLink to="/coupon">Get coupon </NavLink>
                            </p>}
                    <hr />
                </div>

                
    
        
      
        <br/>
        <button onClick={() => makePaymentClick(cartList, User._id,currentDateTime)}>
                        Place Order
                    </button>
            </div>
        </div>
        </>:
        <>
        <h1>Payment Page</h1>
        <div>
            Thankyou for your payment, your order is being processed!
            <hr/>           
        </div>
        
    </>
}
</>



    )






}




export default CheckoutHook;