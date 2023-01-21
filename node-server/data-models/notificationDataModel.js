let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let NotificationSchema = new schemaObj({
    userid: {type:String, required:true},
    message:{type:String,required:true}
    
},
{
    versionKey: false 
});

let NotificationModel = mongooseObj.model("notification",NotificationSchema);
module.exports = NotificationModel;