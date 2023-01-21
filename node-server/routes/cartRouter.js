let express = require("express");
let cartRouter = express.Router({}),
CartDataModel = require("../data-models/cartDataModel");


cartRouter.post("/api/saveUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        if (err){
            console.log("Show error", err);            
            res.send("error while fetching cart!");
        }

        if (!cartDbObj) { 
          console.log("No items found!"); 
          let cartObj = new CartDataModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ 
          console.log("Items found!");
          cartDbObj.cart = req.body.cart;

          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }    
            setTimeout(()=>{
                res.json(data);
            },3000)  

          });
        }
  });

});

cartRouter.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});

cartRouter.delete("/api/deleteUserCart",(req, res)=>{   
    
  CartDataModel.deleteOne({userid: req.body.userid},(err, cart) => {         
    if (err) {
        res.send("Error Occurred"+ err);
    }      
    res.json(cart);
    console.log( "cart deleted successfully");
  });
});

module.exports = cartRouter;

