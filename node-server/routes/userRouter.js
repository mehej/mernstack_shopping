const express = require("express");
const userRouter = express.Router({});
const userDataModel = require("../data-models/userDataModel");

//api to signin and signup user
userRouter.post("/api/signinup",(req, res)=>{

    console.log(req.body);//this will be sent from useraction file to make server call
    
    userDataModel.findOne({userName : req.body.userName},(err, userData)=>{

        if(err){
            console.log(err)
            res.send("Error in fetching user!!")
        } else if(userData){ //get one user means its already present so return as it is userInfo - signin
            //match password or allow oauth or two factor
            res.send(userData);
        }else {//this is the new user so we need to create mongodb object and save it - signup

            let userDataModelObj = new userDataModel(req.body);

            userDataModelObj.save((errr, newUser)=>{ //signup
                //newUser will containe _id from mongodb created by default
                if (errr) {
                    console.log("errr ", errr);
                    res.send("Error Occured while creating user entry")
                } else {
                    console.log("newUser ", newUser);
                    res.send(newUser)
                }
            })

        }

    })
});

userRouter.get("/savedummy",(req, res)=>{
    let name = req.query["userName"];

    console.log("Save Dummy is invoked");
     
    let userMongooseObject = new userDataModel({userName: name});

    userMongooseObject.save((err, data)=>{
        if (err) {
            console.log(err)
            res.send("User save has error!1")
        } else {
            console.log(data)
            res.send(data);
        }
    })





});









module.exports = userRouter;