let multer=require("multer");
let upload=multer({dest:"./uploads/pro_image"});

let express=require("express");
let app=express();

const {add_product,update_product,delete_product,upload_productImg}=require("../controllers/admin.js");

app.get("/delete_pro:p_id",delete_product)
  
  app.post("/update_pro",update_product)
  
  app.post("/add_pro_img",upload.single("pro_image"),upload_productImg)
  app.post("/add_pro",add_product)

  module.exports=app;
  