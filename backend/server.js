let http=require("http");
let express=require("express");
let app=express();
let fs=require("fs");
let session=require("express-session");
let nodemailer=require("nodemailer");
let multer=require("multer");
let upload=multer({dest:"./uploads/pro_image"});2
let con=require("./connection.js");
let cors=require("cors");



app.use(cors({
    origin:"*"
}))
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:true
}));

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));  // ???

app.set('view engine','ejs');

//  let validate=require("./middleware/validate");

const products=require("./routers/products.js");
app.use("/",products);

const signin=require("./routers/authentication/signin.js");
app.use("/",signin);

const admin_signin=require("./routers/authentication/admin_signin");
app.use("/",admin_signin);

const signup=require("./routers/authentication/signup.js");
app.use("/",signup);

const signout=require("./routers/authentication/signout.js");
app.use("/",signout);

const forgot_pass=require("./routers/authentication/forgot_pass");
app.use("/",forgot_pass);

const cart=require("./routers/cart.js");
app.use("/",cart);

const admin=require("./routers/admin.js");
app.use("/",admin);

const gethome=require("./routers/home.js");
app.use("/",gethome);



app.listen(8000,(error)=>{   /// listining to server 
  if(error)
    console.log(error);
    console.log("server is running");
})
