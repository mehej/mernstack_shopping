import React, { useState} from "react";
import {useSelector, useDispatch } from "react-redux";
import {useNavigate,useParams} from "react-router-dom";
import {addReviewToDb} from  "../../State/Review/ReviewAction";
import{ FaStar} from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 150,
      width: 350
    },
    button: {
      border: "1px solid #a9a9a9",      
      width: 200
      
    },
    dropdown: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 5,
        margin: "20px 0",
        minHeight: 40,
        width: 350
      }
  };
  

let ReviewHook = (props) => { 

  const [ ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comments, setComments] = useState("");
  const [prodValue, setProdvalue] = useState("");
  const[reviewed,setReviewed]=useState(false);
  let currentDateTime=Date().toLocaleString();
  const stars = Array(5).fill(0)

  let User = useSelector((state)=>state.userReducer);
  

  const handleClick = value => {
    setRatingValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
    let params = useParams();    
    let orderid = params["orderid"] ; 
    let order = useSelector((state)=>state.orderReducer.orders);
    console.log("the order is ",order);    
    

    let dispatchReview = useDispatch();     
    let addReviewClick = (rating,productid,comments)=>{            
        dispatchReview(addReviewToDb(rating,productid,comments,User._id,User.userName,currentDateTime));
        setReviewed(true);
    }
    let navigate = useNavigate();
    let func = function(event) {        
        navigate('/order');
        event.preventDefault();
    }
    

    let products=[];
    
    order.filter(id=>id._id===orderid).map((item)=>{products=item.cart;})
    // order.map((item)=>{
    //     if(item._id==orderid)
    //     {
    //         products= item.cart; 
    //     }       
    //  });
     console.log("product  ",products);
     let productList = products.length > 0
		&& products.map((item,i) => {
		return (
			<option key={i} value={item._id}>{item.Name}</option>
		)
	});

    return(
      <>{!reviewed?

        <section >
            <h1>Write a customer review</h1>            
            <div >
            <div style={styles.container}>
            <div>
			<select value={prodValue} onChange={e => setProdvalue(e.target.value)} style={styles.dropdown}>
                <option>Select Product</option>
				{productList}
			</select>

            {prodValue}
		</div>
      Star Ratings :
      <div style={styles.stars}>
         {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
             // onMouseOver={() => handleMouseOver(index + 1)}
              //onMouseLeave={handleMouseLeave}
              color={(hoverValue || ratingValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })} 
      </div>
      {ratingValue}
      
        <textarea placeholder="write here ...." style={styles.textarea} onChange={e => setComments(e.target.value)} ></textarea>                
          {comments}     

      </div>
      <button onClick={()=>addReviewClick(ratingValue,prodValue,comments)} >Submit Review</button>
                
               
        {/* Ratings: 
        <select  >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>      */}

	
		{/* <div>
			<select value={prodValue} onChange={e => setProdvalue(e.target.value)}>
                <option>Select Product</option>
				{productList}
			</select>

            {prodValue}
		</div>
                <textarea placeholder="write here ...."></textarea>                
                <button onClick={addReviewClick} >Submit Review</button>
    <button onClick={func}>Go to recent orders</button>*/}                
            </div>
        </section>:<>
        
        <div>
            <h2>Thankyou for your review!</h2>
        <hr/> 
        <button onClick={func} >Go to recent orders</button>          
        </div>
        
    </>
}
        </>
        
    )
}

export default ReviewHook;