import React, { useEffect,useState,Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import {json, NavLink,useNavigate} from "react-router-dom";
import { getRecentOrder } from "../../State/Order/OrderAction";
import { deleteOrderFromDb } from "../../State/Order/OrderAction";
import { saveOrderToDb } from "../../State/Order/OrderAction";
import NotificationHook from "../NotificationComponent/NotificationHooks";



let OrderHook = (props)=> {

    let orderList = useSelector((state)=>state.orderReducer.orders);
    let User = useSelector((state)=>state.userReducer);    
    
    let dispatchToFetch = useDispatch();
    useEffect(()=>{dispatchToFetch(getRecentOrder(User._id)) },[])
    console.log(orderList);
    let currentDateTime=Date().toLocaleString();

    let dispatchToCancelOrder = useDispatch();   
    let cancelOrderOnClick = (orderId,userid)=>{    
    dispatchToCancelOrder(deleteOrderFromDb(orderId,userid)); 
    }
    
    let dispatchToReOrder = useDispatch();
    let reOrderOnClick = (cart,userid,timestamp)=>{
    dispatchToReOrder(saveOrderToDb(cart,userid,timestamp)); 
    }    

    let timediff = (orderedDate)=>{
        let orderDate=new Date(orderedDate).getTime();
        let currDate=new Date().getTime();
        var diff =(orderDate - currDate) / 1000;
        diff /= (60 * 60);
        console.log( Math.abs(Math.round(diff)));         
        return Math.abs(Math.round(diff));
    }

    let navigate = useNavigate();
    let reviewOnClick = (orderid)=>{
        navigate('/review/'+orderid);

    }

    return(
        
        <>
       
        {orderList && orderList.length > 0 ? 
        <Fragment>            
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Item Details</th>                   
                        <th>Order Date</th>                                
                    </tr>
                </thead>
                <tbody>
                   
                    { orderList.map(item=>{
                       
                            return(
                               
                    <tr>
                    <td>{item._id}</td>
                    <td><table>
                        <tr>
                        <th>Item Name</th>
                        <th>Price</th>                               
                        <th>Description</th>                                
                        <th>Quantity</th>
                        <th>Subtotal</th>    
                        </tr>
                    { item.cart.map(product=>{
                       
                       return(                
                    <tr><td>{product.Name}</td>
                    <td>{product.Price}</td>
                    <td>{product.Description}</td>
                    <td>{product.qty}</td> 
                    <td>{product.Price*product.qty}</td>
                    </tr>)})}</table> </td>                 
                    <td>{new Date(item.orderedOn).toLocaleString()}</td>
                    {timediff(item.orderedOn)>48             
                     ?<td>
                    <button onClick={()=>reOrderOnClick(item.cart,User._id,currentDateTime)}>
                         Order Again
                    </button>
                    <button onClick={()=>reviewOnClick(item._id)}>
                         Review 
                    </button>
                    
                    
                 </td>:
                        <td>
                            <button onClick={()=>cancelOrderOnClick(item._id,User._id)}>
                                Cancel Order
                            </button>
                                                    

                        </td>
                    }
                       
                    
                    </tr>) 
               
                
                })}        
                </tbody>
            </table> 
        </Fragment>: "No order placed"
}       <div>

   
</div>
        
        </>
    )
}
export default OrderHook;