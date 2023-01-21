import React, { Component,Suspense } from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import "./app.css";//css and style loaders are present in webpack config so we can use it here

import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";
//import User from "./AppComponents/UserComponent/UserComponent";
import User from "./AppComponents/UserContainer/UserContainer";
import UserHook from "./AppComponents/UserComponent/UserHooks";
import UsingHooks from "./Hooks/UnderstandingHooks";
import StudentHook from "./AppComponents/StudentComponent/StudentHooks";
import ProductHook from "./AppComponents/ProductComponent/ProductHooks";
import DisplayProducts from "./AppComponents/ProductComponent/DisplayProducts";
import CartHook from "./AppComponents/CartComponent/CartHooks";
import CheckoutHook from "./AppComponents/CheckoutComponent/CheckoutHooks";
import Coupon from "./AppComponents/CouponComponent/Couponhooks";
import OrderHook from "./AppComponents/OrderComponent/OrderHooks";
import ReviewHook from "./AppComponents/ReviewComponent/ReviewHooks";
import NotificationHook from "./AppComponents/NotificationComponent/NotificationHooks";
import LogoutHook from "./AppComponents/LogoutComponent/LogoutHooks";

export default class ApplicationComponent extends Component{
    constructor(props, context){
        super();

        this.state = {
            title : "Home Page Of Application",
            counter : 1,
            headerTitle : "Welcome to SynergisticIT Shopping Cart"
        }
    }

    render(){
        console.log("Application Render!!");
        let myName = "What's in the Name";
        let address = "Somewhere on earth";
        let val1 = 2, val2 =5;
       
        return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}></Suspense>
                <Header headerTitle={this.state.headerTitle}/>                
                {}
                <Routes>
                        <Route path="/" element={<Home  title={this.state.title} />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/hooks" element={<UsingHooks  name={"Mehejabeen"}/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="/student" element={<StudentHook />} />
                        <Route path="/product" element={<ProductHook />} />
                        <Route path="/cart" element={<CartHook />} />
                        <Route path="/display" element={<DisplayProducts />} />
                        <Route path="/checkout" element={<CheckoutHook />} />
                        <Route path="/coupon" element={<Coupon />} />
                        <Route path="/order" element={<OrderHook />} />
                        <Route path="/review/:orderid" element={<ReviewHook />} />
                        <Route path="/notification" element={<NotificationHook />} />                       
                        <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer address1={address}/>
            </Router>
        )
    }

}
