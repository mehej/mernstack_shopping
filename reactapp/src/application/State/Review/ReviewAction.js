import * as actionType from "../actionTypes";


export const SHOWREVIEW = (reviews)=>{
    return {
        type : actionType.REVIEW_SHOWREVIEW,
        payload : {reviews}
    }
}

export const addReviewToDb = (rating,productid,comments,userid,username,timestamp)=>{
    console.log("review details", rating,productid,comments,userid,timestamp,username); 
    return function(dispatch) {     
        window.fetch("http://localhost:9000/review/api/addReview",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid,username:username, productid:productid,comments:comments,rating:rating,reviewDate:timestamp})})
        .then (response => response.json())
        .then (reviewresponse => {
            console.log("review response ", reviewresponse);                 
        })
        .catch((err)=>{           
            console.log("Error While Saving Review", err);
        }) 
    }
}

export const getReviews = (productid)=>{
    console.log("get product reviews ");
    return function (dispatch) { 
        window.fetch("http://localhost:9000/review/api/getproductreview",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({productid:productid})})        
        .then(reviewresp => reviewresp.json())
        .then((reviewresp)=>{
            console.log("product review is  :  ", reviewresp);            
            dispatch(SHOWREVIEW(reviewresp))

        })
        .catch((e)=>{
            console.log("Error While retrieving product review", e)
        })
    }
};



