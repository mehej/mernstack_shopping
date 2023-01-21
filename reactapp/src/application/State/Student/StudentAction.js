import * as actionType from "../actionTypes";
import axios from "axios";

export const AddStudent = (student)=>{
    return {
        type : actionType.STUDENT_ADDSTUDENT,
        payload : student 
    }
}

export const createStudent = (student)=>{  
    return (dispatch)=>{        
        axios.post("http://localhost:9000/student/api/createstudent", student )
                .then((ServerData)=>{
                    let newStudent = ServerData.data;                    
                    dispatch(AddStudent(newStudent));
                })
                .catch((e)=>{
                    console.log("error in student creation ", e)
        })
    }
}