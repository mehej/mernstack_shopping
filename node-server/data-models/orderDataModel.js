let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let OrderSchema = new schemaObj({
    userid: {type:String, required:true},
    cart: Object,
    orderedOn:{type:Date, required:true}
},
{
    versionKey: false 
});

let OrderModel = mongooseObj.model("order",OrderSchema);
module.exports = OrderModel;