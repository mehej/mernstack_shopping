import React, { useEffect,useState,Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {json, NavLink,useNavigate} from "react-router-dom";
import HeaderComponent from "../../Common/HeaderComponent";
import HomeComponent from "../../Common/HomeComponent";
import {logout} from "../../State/User/UserAction";

let LogoutHook = (props)=> {
    let dispatchToLogout = useDispatch();
    //useEffect=(()=>{dispatchToLogout(logout())},[]);   
    let navigate=useNavigate();
    navigate('/home');
    }

export default LogoutHook;