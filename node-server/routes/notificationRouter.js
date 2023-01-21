const express = require("express");
const notificationRouter = express.Router({});
const notificationDataModel = require("../data-models/notificationDataModel");


 notificationRouter.post("/api/saveNotification",(req, res)=>{    
        let NotificationDataModelObj = new notificationDataModel(req.body);
        NotificationDataModelObj.save((e, newnotification)=>{               
            if (e) {
                console.log("e ", e);
                 res.send("Error in adding notification")
             } else {
                 console.log("notification saved successfully ", newnotification);
                 res.send(newnotification)
             }
     })
 });

 notificationRouter.post("/api/getnotifications",(req, res)=>{
    notificationDataModel.find({userid: req.body.userid},(err, notification) => {         
        if (err) {
            res.send("Error Occurred in fetching notifications"+ err);
        }      
        res.json(notification);
      });
});

notificationRouter.delete("/api/deleteNotification",(req, res)=>{
    notificationDataModel.deleteOne({_id: req.body._id},(err, notification) => {         
      if (err) {
          res.send("Error Occurred in deleting notification"+ err);
      }      
      res.json(notification);
      console.log( "Notification deleted successfully");
    });
  });

 module.exports = notificationRouter;
