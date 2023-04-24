const express=require("express");
const app=express();

const {get_cartPage,load_cartItem,delete_cartItem,cart_itemQuantity}=require("../controllers/cart.js");

  app.get("/cart",get_cartPage)
  
  app.get("/load_cart",load_cartItem)
  
  app.get("/remove_cartitem:p_id",delete_cartItem)
  
  app.get("/cart_product_quant:p_id:msg",cart_itemQuantity)
  
  module.exports=app;                                                                                                                                                                                         