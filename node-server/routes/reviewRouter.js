const express = require("express");
const reviewRouter = express.Router({});
const reviewDataModel = require("../data-models/reviewDataModel");


reviewRouter.post("/api/addReview",(req, res)=>{    
        let reviewDataModelObj = new reviewDataModel(req.body);
        reviewDataModelObj.save((e, newreview)=>{               
            if (e) {
                console.log("e ", e);
                res.send("Error in adding review")
             } else {
                console.log("Added review successfully ", newreview);
                res.send(newreview)
             }
     })
 });

reviewRouter.post("/api/getproductreview",(req, res)=>{
    reviewDataModel.find({productid: req.body.productid},(err, review) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(review);
      });
});
 module.exports = reviewRouter;

