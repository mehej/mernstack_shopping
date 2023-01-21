import React, { Component, PureComponent, createRef } from "react";
// import About from "./AboutComponent";
// import ChildComponent from "./ChildFunction";
// import NotFound from "./NotFoundComponent";

//export default class HomeComponent extends Component {
export default class HomeComponent extends PureComponent { //Pure Component has implementation of shouldComponentUpdate
    constructor(props){
        super();
        this.state = {
            age : 20,
            name : "Synergistic IT",
            counter : 1,
            sessionName : "MERNStack",
            address : "Somewhere on Earth"
        }
        //getAllDistricts() - server call not allowed here
        //we can't access the html
        this.interval = "";//global variable of the class
        this.user = {UserName:"Paribesh", Password : "Tegdeep"};

        //ref - keyword : used to read/update the html element out react framework
        //ref - keyword uses
        //for creating and accessing html out of react flow
        //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAddress = createRef(); 
        this.inputSession = createRef();

        //this.inputAddress.current.focus();
        //this.inputAddress.current.value = "Paribesh";
    }

    increment = ()=>{
        this.interval = setInterval(() => {
            //this.state.counter++; //it will update the state value but not call the render

            this.setState({ // the reseved API to pass the message to react library to invoke render method so that new v-dom can be created
                counter : this.state.counter + 1
            })

            //we should avoid to use unless necessary
            //this.forceUpdate();//force update also calls render method but skips other life cycle methods
            console.log(this.state.counter);
        }, 1000);
    }

    //creation life cycle method
    componentDidMount(){
        console.log("Component Did Mount - Rendered On Browser");
        //this.increment();
        //we can access the html and make call to server to fetch more data
        //getAllDistricts()
        
        // setTimeout(() => {
        //   //  this.inputAddress.current.focus();    
        //     this.inputAddress.current.value = "Mehejabeen";
        //     this.inputSession.current.value = "Paribesh";
        // }, 3000);        
    }

    //fetch the list of districts - ajax call
    // getAllDistricts(countryidFromIPAdress){
    // }    

    //update life cycle method
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState)
    //     console.log(nextProps)

    //     if (nextState.age == this.state.age) {//if the updated value of age is same then don't call render method
            
    //         return false;//it will not call the render method so the new v-dom will not be created
    //     } 
    //     return true; //it will invoke the render method
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps
    //     }
    // }

    // componentDidUpdate(prevState, prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("prevState",prevState);
    //     console.log("prevProps", prevProps);
    // }

    clickEventHandler = (evt)=>{
        //alert("Button is Clicked!!")
        this.setState({
            age : this.state.age + 1
        })
        console.log(this.state.age);
        // this.state.age++;
        // this.forceUpdate();
    }


    //destruction life cycle method
    componentWillUnmount(){
        //we should use this LC method to remove all the subscriptions and any calls like setinterval 
        console.log("Component Will Unmount");
        //debugger;
        clearInterval(this.interval);
    }

    childClick = (age)=>{
        alert("Handler Passed to Child and Invoked by child component!!!")
        this.setState({
            age : age
        })
    }

    readSessionNameData = (evt)=>{ 

        let targetValue = evt.target.value;
        let classList = evt.target.classList;

        if (classList.contains("sessionText")) {
            this.setState({
                sessionName : targetValue
            });    
        } else if(classList.contains("addressText")){
            this.setState({
                address : targetValue
            });
        }
        evt.preventDefault();
    }

    formSubmit = (evt)=>{
        let address = this.inputAddress.current.value;
        let sessionName = this.inputSession.current.value;

        this.setState({
            address,
            sessionName
        })
        
        evt.preventDefault();
    }

    //creation and updation life cycle method
    render(){
        console.log("Home Render!!");

        return(
            <>
                <h2>{this.props.title}</h2>
                <div className={"loadimage form"} >
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
                </div>

            </>
        )
    }

}