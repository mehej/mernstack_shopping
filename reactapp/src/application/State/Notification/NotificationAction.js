import * as actionType from "../actionTypes";


export const AddNotification = (notifications)=>{
    return {
        type : actionType.ADD_NOTIFICATIONS,
        payload : {notifications}
    }
}

export const saveNotificationToDb = (userid,message)=>{
    console.log("notification details", userid,message); 
    return function(dispatch) {     
        window.fetch("http://localhost:9000/notification/api/saveNotification",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid,message:message})})
        .then (response => response.json())
        .then (notificationresponse => {
            console.log("response ", notificationresponse); 
            dispatch(getNotification(userid))           
        })
        .catch((err)=>{           
            console.log("Error While Saving Notification", err);
        }) 
    }
}

export const getNotification = (userid)=>{
    console.log("Notifications");

    return function (dispatch) {       

        window.fetch("http://localhost:9000/notification/api/getnotifications",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({userid:userid})})        
        .then(notificationresp => notificationresp.json())
        .then((notificationresp)=>{
            console.log("new notification : ", notificationresp);            
            dispatch(AddNotification(notificationresp))

        })
        .catch((e)=>{
            console.log("Error While retrieving notifications", e)
        })
    }
};

export const deleteNotificationFromDb=(notificationId,userid)=>{

    return function(dispatch) {
        console.log("delete notification");
        window.fetch("http://localhost:9000/notification/api/deleteNotification",{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id:notificationId})})
        .then (response => response.json()) 
        .then((notificationresp)=>{
            console.log("Notification cancelled  ", notificationresp);            
            dispatch(getNotification(userid))})        
        .catch((err)=>{
            console.log("Error While deleting notification", err)
        })
    }
}