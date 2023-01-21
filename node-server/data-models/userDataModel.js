let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose
mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required:true},
    street: String,
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});
let UserModel = mongooseObj.model("user",userSchema);

module.exports = UserModel;
