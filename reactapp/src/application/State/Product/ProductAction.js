import * as actionType from "../actionTypes";
import axios from "axios";

export const AddProduct = (products)=>{
    return {
        type : actionType.PRODUCT_ADDPRODUCT,
        payload : {products}
    }
}



export const addProduct = (product)=>{  
    console.log("Product ", product);
    return (dispatch)=>{        
        axios.post("http://localhost:9000/product/api/addproduct", product )
                .then((ServerData)=>{
                    let newProduct = ServerData.data;                    
                    dispatch(fetchProducts());
                })
                .catch((e)=>{
                    console.log("error in adding product ", e)
                })
    }
}

export const fetchProducts = ()=>{
    console.log("Product ");

    return function (dispatch) {       

        window.fetch("http://localhost:9000/product/api/getproducts",{
            method: 'GET'             
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("Result of fetchproducts ", productresp);            
            dispatch(AddProduct(productresp))

        })
        .catch((e)=>{
            console.log("Error While fetching Products", e)
        })
    }
};