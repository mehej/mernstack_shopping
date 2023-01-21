const express = require("express");
const orderRouter = express.Router({});
const orderDataModel = require("../data-models/orderDataModel");


 orderRouter.post("/api/saveOrder",(req, res)=>{    
        let OrderDataModelObj = new orderDataModel(req.body);
         OrderDataModelObj.save((e, neworder)=>{               
            if (e) {
                console.log("e ", e);
                 res.send("Error in adding order details")
             } else {
                 console.log("order placed successfully ", neworder);
                 res.send(neworder)
             }
     })
 });

 orderRouter.post("/api/getRecentOrder",(req, res)=>{
    orderDataModel.find({userid: req.body.userid},(err, order) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(order);
      });
});



orderRouter.delete("/api/deleteOrder",(req, res)=>{
    orderDataModel.deleteOne({_id: req.body._id},(err, order) => {         
      if (err) {
          res.send("Error Occurred"+ err);
      }      
      res.json(order);
      console.log( "order deleted successfully");
    });
  });

module.exports = orderRouter;
