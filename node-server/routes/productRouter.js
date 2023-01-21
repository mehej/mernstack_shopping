const express = require("express");
const productRouter = express.Router({});
const productDataModel = require("../data-models/productDataModel");


productRouter.post("/api/addproduct",(req, res)=>{  
    
            let productDataModelObj = new productDataModel(req.body);
            productDataModelObj.save((e, newproduct)=>{               
                if (e) {
                    console.log("e ", e);
                    res.send("Error in adding product details")
                } else {
                    console.log("new product ", newproduct);
                    res.send(newproduct)
                }
        })
});

productRouter.get('/api/getproducts',(req, res)=>{
  
    productDataModel.find((e, Products)=>{ 
        if (e) {
                console.log(e)
                res.send("Error in fetching Products");
        } else {
                res.send(Products);
        }
    })
});



module.exports = productRouter;