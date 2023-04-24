let express=require("express");
let app=express();


const {getIndex,getHome,verify_token}=require("../controllers/home.js");

  app.get("/",getIndex)
  
  app.get("/home",verify_token,getHome)  

  module.exports=app;