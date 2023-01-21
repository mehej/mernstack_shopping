import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProducts";
import UserHook from "../UserComponent/UserHooks";



let ProductHook = (props)=>{
    
    let inputName = useRef(null);
    let inputPrice = useRef(null);
    let inputDescription = useRef(null);
    let inputRating = useRef(null);  

    
    let product = useSelector((state)=>state.productReducer);
    let user = useSelector((state)=>state.userReducer);
    let userName=user.userName;
   
    let dispatchToAddProduct = useDispatch(); 

    if(userName=="Admin"){

    useEffect(()=>{

        inputName.current.value = product.Name;
        inputPrice.current.value = product.Price;
        inputDescription.current.value = product.Description;
        inputRating.current.value = product.Rating;

    })
}

    let readFormData = (evt)=>{      
        let productObj = {
            Name : inputName.current.value,
            Price : inputPrice.current.value,
            Description : inputDescription.current.value,
            Rating : inputRating.current.value
        }
               
        dispatchToAddProduct(addProduct(productObj));

        evt.preventDefault();
    }



      
    return(
        <>
      {userName=="Admin" &&
        <React.Fragment> 
            <h1>Product Component</h1>
            <form className={"form col-md-5 productHook"} onSubmit={readFormData}>                
                <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputName} maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Price :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputPrice} maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Description :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputDescription} maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputRating} maxLength={20} required />
                </label>                

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Add" />
            </form>
            </React.Fragment> 
}
    
            
            <DisplayProducts/>
           
        </>
    )
}

export default ProductHook;