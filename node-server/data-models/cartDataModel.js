let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let CartSchema = new schemaObj({
    userid: {type:String, required:true},
    cart: Object
},
{
    versionKey: false 
});

let CartModel = mongooseObj.model("cart",CartSchema);
module.exports = CartModel;
