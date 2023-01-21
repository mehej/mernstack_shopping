import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addItemToCart } from "../../State/Cart/CartAction";

import ProductReview from "../ReviewComponent/DisplayProductReviews";




let DisplayDetailedProduct = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    

    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart(product))
    }

    

    return(
        <>
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.Name}
                {showHide ? 
                
                    <ul>
                    <li>{product.Price}</li>
                    <li>{product.Description}</li>
                    <li>{product.Rating}</li>
                    {/* {reviewList && reviewList.length > 0 ? reviewList.map(item=>{
                       
                       return(item.comments)}):""} */}
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                    
                </ul>
                
                : " "} 
                
            </li>

            <ProductReview productid={product._id}/>
            
        </ul>
            
                          
               
               
        </>
               
                   
            
       
    )

}







export default DisplayDetailedProduct;