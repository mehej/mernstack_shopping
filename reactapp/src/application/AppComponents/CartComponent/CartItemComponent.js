import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeItem ,  updateItem} from "../../State/Cart/CartAction";

let CartItem = (props)=>{
    let item = props.item;
    let readOnly = props.readOnly;
    let [qty, setQty] = useState(item.qty);

    let dispatchToRemove = useDispatch();
    let dispatchToUpdate = useDispatch();

    let removeItemFromCart = ( productid )=>{
        dispatchToRemove(removeItem(productid))
    }

    let updateItemFromCart = ( productid, qty )=>{
        dispatchToUpdate(updateItem(productid, qty))
    }

    return(
        <tr>
            <td>{item.Name}</td>
            <td>${item.Price}</td>
            {readOnly ?"" :
            <>
            <td>{item.Description}</td>
            <td>{item.Rating}</td>
            </>
    }
            <td>{!readOnly ? 
                    <input type={"number"} value={qty} 
                    onChange={(evt)=>{setQty(evt.target.value)}} 
                    maxLength={"2"}/>
                : 
                    item.qty}
            </td>
            <td>${item.Price*item.qty}</td>
                {readOnly ?"" :
                        <td>
                            <button onClick={()=>removeItemFromCart(item._id)}>
                                Remove
                            </button>
                        </td>
                }
                {readOnly ?"" :
                    <td>
                        <button onClick={() => updateItemFromCart(item._id, qty)}>
                            Update
                        </button>
                    </td>
                }
        </tr>
    )
}

export default CartItem;