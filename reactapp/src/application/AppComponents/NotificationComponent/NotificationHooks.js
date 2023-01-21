import React, { useState,useEffect,Fragment } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import { getNotification } from "../../State/Notification/NotificationAction";
import {deleteNotificationFromDb} from "../../State/Notification/NotificationAction";



let NotificationHook = (props) => {
    const [notify, setNotify] = useState(true);

    let notification = useSelector((state) => state.NotificationReducer.notifications);
    let User = useSelector((state)=>state.userReducer); 
    let dispatchToFetch = useDispatch();
    useEffect(()=>{dispatchToFetch(getNotification(User._id)) },[]);

    let dispatchTodeleteNotification = useDispatch();   
    let deleteNotification = (notificationId)=>{    
        dispatchTodeleteNotification(deleteNotificationFromDb(notificationId,User._id)); 
    }
return(
<>
{!notify?"":
<>
{notification && notification.length > 0 ? 
        <Fragment> 
            <div className="icons">
            <div className="alert"><h4>Notifications</h4><hr/>
                   { notification.map(item=>{                      
                           return( 
                            
                    <div onClick={()=>deleteNotification(item._id)} value={item._id} className="notificationDisplay">{ item.message}&nbsp;&nbsp;&nbsp;&nbsp;&times;<hr/></div>
                          
                          
                          
                    )})}
                           
                           </div></div>  
        </Fragment>:""}
        </>
}
       
</>
)

}
export default NotificationHook;
