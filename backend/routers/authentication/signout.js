let express=require("express");
let app=express();

const signout=require("../../controllers/authentication/signout.js")

app.get("/signout",signout);
  
module.exports=app;