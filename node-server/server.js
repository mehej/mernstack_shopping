const express = require('express') 
let port = process.env.PORT || 9000;
let cors = require("cors");//middle ware to fix the issue of cross origin request

let app = express(); 
let defaultRouter = require("./routes/defaultRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

let studentApp = express();
let studentRouter = require("./routes/studentRouter");

let productApp = express();
let productRouter = require("./routes/productRouter");

let cartApp = express();
let cartRouter = require("./routes/cartRouter");

let orderApp = express();
let orderRouter = require("./routes/orderRouter");

let reviewApp = express();
let reviewRouter = require("./routes/reviewRouter");

let notificationApp=express();
let notificationRouter=require("./routes/notificationRouter");


app.use(cors());

app.use("/static", express.static("public"))

app.use(express.json({limit:'2mb', extended:false})); 

app.use("/user", userApp);
userApp.use("/", userRouter);

app.use("/student", studentApp);
studentApp.use("/", studentRouter);

app.use("/product", productApp);
productApp.use("/", productRouter);

app.use("/cart", cartApp);
cartApp.use("/", cartRouter);

app.use("/order", orderApp);
orderApp.use("/", orderRouter)

app.use("/review", reviewApp);
reviewApp.use("/", reviewRouter)

app.use("/notification", notificationApp);
notificationApp.use("/", notificationRouter)


app.use("/",defaultRouter);
app.listen(port, ()=> console.log(`server is listing as port ${port}`))