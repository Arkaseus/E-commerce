const express=require("express");
const app=express();

const {get_forgotpage,forgot_pass,forgot_pass1,forgot_pass2}=require("../../controllers/authentication/forgot_pass");

    app.get("/forgot_pass",get_forgotpage)
    app.post("/forgot_pass",forgot_pass)
    
    app.get("/reset_pass:key",forgot_pass1)
    app.post("/reset_pass2",forgot_pass2)
    

    module.exports=app;