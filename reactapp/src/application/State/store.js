
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk"; 
import userReducer from "./User/UserReducer";
import studentReducer from "./Student/StudentReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/cartReducer";
import couponReducer from "./Coupon/CouponReducer";
import orderReducer from "./Order/OrderReducer";
import LoadingReducer from "./Loading/LoadingReducer";
import reviewReducer from "./REVIEW/ReviewReducer";
import NotificationReducer from "./Notification/NotificationReducer";


const logger = () => (next) => (action) => {
    
    console.log("Logged Action : Store File ", action);
    next(action); 
};

const rootReducer = combineReducers({
    userReducer ,
    studentReducer,
    productReducer,
    cartReducer,
    couponReducer,
    orderReducer,
    LoadingReducer,
    reviewReducer,
    NotificationReducer
})


const logoutReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      return rootReducer(undefined, action)
    }
}
export default configureStore(
    {reducer : rootReducer},
    {},
    applyMiddleware(logger, thunk)
)