import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../State/Product/ProductAction";
import DisplayDetailedProduct from "./DisplayDetailedProduct";

let DisplayProducts = (props)=>{

    let productList = useSelector((state)=>state.productReducer.Products);
    let dispatchToFetch = useDispatch();

    useEffect(()=>{ dispatchToFetch(fetchProducts()) },[])
    console.log("productList ", productList)

    return(
        <div className="col-md-5">
            <h2>List of products.</h2>
            <div>
                {productList && productList.length>0 ? productList.map(product=>{         
                        
                        return <DisplayDetailedProduct product={product}  key={product._id} />
                    }):"No Product Found"
                }
            </div>
        </div>
    )

}

export default DisplayProducts;