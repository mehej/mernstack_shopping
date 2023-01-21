import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getReviews} from "../../State/Review/ReviewAction"
import{ FaStar} from "react-icons/fa";

function ProductReview(props) {
  const [show, setShow] = useState(false);
  let productid=props.productid;
  const stars = Array(5).fill(0)
  let i=0;


  const handleClose = () => setShow(false);
  let dispatchToShowReview = useDispatch();
  let handleShow = () =>{
    dispatchToShowReview(getReviews(productid));
    setShow(true);
}
  

  let reviewList = useSelector((state)=>state.reviewReducer.reviews); 
  console.log("product reviews are " ,reviewList);

//   let dispatchToShowReview = useDispatch();
//     let getProductReview=(productid)=>{
//         dispatchToShowReview(getReviews(productid));
//     }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reviews
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Customer Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {reviewList && reviewList.length>0 ? reviewList.map(revw=>{ 
            return(
                <table>
<tbody>
<tr>
<td>
<div>
<span>{revw.username }</span>
 <span >            {stars.map((_,index) => {
  if (index<revw.rating)
          return (<FaStar color='orange'/>);
  else
  return (<FaStar />); 
    })}                    
             
             
            </span><span>{new Date(revw.reviewDate).toLocaleDateString()}</span>
<hr/>
<p>{revw.comments} </p>
</div>
</td>
</tr>
</tbody>
</table>
            ) //revw.comments;
        }):"No Reviews found"
                }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductReview;