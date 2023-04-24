const express=require("express");
const app=express();

const {verify_token,signin_get,signin_post}=require("../../controllers/authentication/signin.js");

app.route("/signin").get(verify_token,signin_get).post(signin_post)

module.exports=app;