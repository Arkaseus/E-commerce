let express=require("express");
let app=express();

const {loadproducts,getproducts,add_product_tocart}=require("../controllers/products.js");

app.get("/getdata",loadproducts);
  
app.get("/getdetails:p_id",getproducts);

app.post("/add_tocart",add_product_tocart)

  module.exports=app;
