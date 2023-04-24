const express=require("express");
const app=express();

const {signup_get,signup_post,verify_email}=require("../../controllers/authentication/signup.js");


app.route("/signup").get(signup_get).post(signup_post)
app.post("/verify_email",verify_email)



module.exports=app;