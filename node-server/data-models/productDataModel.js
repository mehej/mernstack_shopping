let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;
mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let productSchema = new schemaObj({
    Name : {type: String, required : true},
    Price: {type:Number, required:true},
    Description: {type: String, required : true},
    Rating: {type:Number, required:true}     
},
{
    versionKey: false
});

let ProductModel = mongooseObj.model("product",productSchema);

module.exports = ProductModel;
