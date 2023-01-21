import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStudent } from "../../State/Student/StudentAction";

let StudentHook = (props)=>{
    
    let inStudentName = useRef(null);
    let inStudentPass = useRef(null);
    let inSessionAddress = useRef(null);
    let inStudentSession = useRef(null);

   

    
    let student = useSelector((state)=>state.studentReducer);
    let dispatchToCreateStudent = useDispatch(); 

    useEffect(()=>{

        inStudentName.current.value = student.StudentName;
        inStudentPass.current.value = student.StudentPass;
        inSessionAddress.current.value = student.SessionAddress;
        inStudentSession.current.value = student.StudentSession;

    })

    let readFormData = (evt)=>{
      
        let studentObj = {
            StudentName : inStudentName.current.value,
            StudentPass : inStudentPass.current.value,
            SessionAddress : inSessionAddress.current.value,
            StudentSession : inStudentSession.current.value
        }
       
        
        dispatchToCreateStudent(createStudent(studentObj));

        evt.preventDefault();
    }


    return(
        <>
            <h1>Student Enrollment</h1>
            <form className={"form col-md-10 studentHook"} onSubmit={readFormData}>                
                <label>
                    <b>Student Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inStudentName} 
                        placeholder="Please enter student name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inStudentPass} 
                            placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Session Address :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inSessionAddress} 
                            placeholder="Please enter session address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Session  Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inStudentSession} 
                            placeholder="Please enter session Name" />
                </label>                

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Create Student Account" />
            </form>
        </>
    )
}

export default StudentHook;