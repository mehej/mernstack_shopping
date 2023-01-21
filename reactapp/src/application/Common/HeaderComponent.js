import React,{useState} from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch,useSelector } from "react-redux";
import { FaBell } from "react-icons/fa";
import { getNotification } from "../State/Notification/NotificationAction";
import NotificationHook from "../AppComponents/NotificationComponent/NotificationHooks";
import LogoutHook from "../AppComponents/LogoutComponent/LogoutHooks";



let Header = (props)=>{
    let navigate = useNavigate();
    const[notify,setNotify]=useState(false);

    let func = function(event) {
        event.preventDefault();         
        navigate('/about/5000');
    }

    let User = props.User;    
    let userName = props.User.userName;

    let notification = useSelector((state) => state.NotificationReducer.notifications);

    console.log("username",userName);
    console.log("notification",notification);

   
   
    
    return(
        <>

        Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
           {/* <div>
                Hi, <b> {props.headerTitle} </b> 
                <hr/>                 
              {/*  {User.userName} {User.street} </div>*/}
                         
            <br></br>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>  
            {/*<NavLink to="/user" className="button" activeclassname="success" >User </NavLink>*/}
           {/* <NavLink to="/hooks" className="button" activeclassname="success" >Hooks </NavLink> */}
           
            {/*<NavLink to="/student" className="button" activeclassname="success" >Student </NavLink>*/}
            {/*<NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> */}             

            {/*<button onClick={func}>Go To About</button>*/}
            <NavLink to="/user" className="button" activeclassname="success" style={() => ({       
            float:"right" })}>{userName == "" ? "Login" : "User"} </NavLink> 
            {userName && <React.Fragment>
            <NavLink className="icons" activeclassname="success" 
            style={() => ({  float:"right"  })}>
            <FaBell size="45" onClick={()=>setNotify(!notify)} />
            <div className="counter">{notification.length}{notify &&<NotificationHook/>}</div>
           
            </NavLink>
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
                <NavLink to="/coupon" className="button" activeclassname="success" >Coupon </NavLink>  
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/order" className="button" activeclassname="success" >Recent Orders </NavLink>
                <NavLink to="/home" className="button" activeclassname="success" >Logout </NavLink>             
                <LogoutHook/>
                </React.Fragment>
            }
            
            
            
            
            
        </>
    )
}


Header.propTypes = {
    headerTitle : PropTypes.string.isRequired
}


let mapStateToProps = (state)=>{
    return {
        User : state.userReducer
    }
}



export default connect(mapStateToProps, null)(Header);