let express=require("express");
let app=express();
const {adminget,adminpost,verify_token}=require("../../controllers/authentication/admin_signin");

app.route("/signin_admin").get(adminget).post(adminpost);

module.exports=app;