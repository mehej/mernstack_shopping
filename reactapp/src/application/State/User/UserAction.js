import * as actionType from "../actionTypes";
import axios from "axios";
import { getUserCart } from "../Cart/CartAction";
import { getNotification } from "../Notification/NotificationAction";

export const AddUser = (user)=>{
    return {
        type : actionType.USER_ADDUSER,
        payload : user 
    }
}

export const RemoveTheUser = () => { 
    type: actionType.USER_LOGOUT 
};

export const signInSignUpUser = (user)=>{
    
    return (dispatch)=>{        
        console.log("called by dispatch and synced by thunk");        
        axios.post("http://localhost:9000/user/api/signinup",
                    user
                )
                .then((ServerData)=>{
                    let signdUser = ServerData.data;                    
                    dispatch(AddUser(signdUser));
                    dispatch(getUserCart(signdUser._id));
                    dispatch(getNotification(signdUser._id));
                })
                .catch((err)=>{
                    console.log("err in login ", err)
        })
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        console.log(" user logout"); 
    dispatch(RemoveTheUser());
    
    }
}
