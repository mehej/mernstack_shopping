const express = require("express");
const studentRouter = express.Router({});
const studentDataModel = require("../data-models/studentDataModel");


studentRouter.post("/api/createstudent",(req, res)=>{    
    
    
    studentDataModel.findOne({StudentName : req.body.StudentName},(e, data)=>{

        if(e){
            console.log(e)
            res.send("Error in fetching student")
        } else if(data){ 

            res.send(data);
        }else {

            let studentDataModelObj = new studentDataModel(req.body);

            studentDataModelObj.save((e, newStudent)=>{               
                if (e) {
                    console.log("e ", e);
                    res.send("Error in creating student")
                } else {
                    console.log("new student ", newStudent);
                    res.send(newStudent)
                }
            })

        }

    })
});


module.exports = studentRouter;