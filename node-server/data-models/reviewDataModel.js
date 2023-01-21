let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;
mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let reviewSchema = new schemaObj({
    userid : {type: String, required : true},
    username : {type: String, required : true},
    productid : {type: String, required : true},
    rating: {type:Number, required:true},
    comments: {type: String, required : true},
    reviewDate: {type:Date, required:true}     
},
{
    versionKey: false
});

let ReviewModel = mongooseObj.model("review",reviewSchema);

module.exports = ReviewModel;