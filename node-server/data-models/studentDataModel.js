let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;
mongooseObj.connect("mongodb://127.0.0.1/mernstack12"); 

let studentSchema = new schemaObj({
    StudentName : {type: String, required : true},
    StudentPass: {type:String, required:true},
    SessionAddress: String,
    StudentSession: String     
},
{
    versionKey: false
});

let StudentModel = mongooseObj.model("student",studentSchema);

module.exports = StudentModel;
