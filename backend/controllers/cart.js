let con=require("../connection.js");
const jwt=require("jsonwebtoken");
const secretKey="alkjasqiuewlmna0823473271";


const get_cartPage=(req,res)=>{             // get cart route

    if(true)
    res.status(200).json("granted");
   
    ///  ??
  }

  const load_cartItem=(req,res)=>{      
                                 ///    load cart items
  let token=req.headers['authorization'];
  try{
  let user=jwt.verify(token,secretKey);
    
    if(user)
    {
     con.query(`select * from accounts where u_id=${user.u_id};`,(err,data)=>{
      res.json(data[0].cart);
    })
    }
  }
  catch(e)
  {
      res.status(401).json("unauthorized");
  }
   
    // })
        
  //  
  }

  const delete_cartItem=(req,res)=>{             //  delete cart item
    let token=req.headers['authorization'];
    let user=jwt.verify(token,secretKey);
      
    con.query(`select * from accounts where u_id=${user.u_id};`,(err,account)=>{
  
      let cart_arr=JSON.parse(account[0].cart);
      
      for(let j=0;j<cart_arr.length;j++)
      {
        if(cart_arr[j].p_id==req.params.p_id)
         {
          cart_arr.splice(j,1);
         }
      }
  
      con.query(`update accounts set cart='${JSON.stringify(cart_arr)}' where u_id=${user.u_id};`,(err)=>{
        if(err)
        console.log(err);
      })
     
    })
    res.json("ok");
  
  }

  const cart_itemQuantity=(req,res)=>
  {    let token=req.headers['authorization'];
       let user=jwt.verify(token,secretKey);
    con.query(`select * from accounts where u_id=${user.u_id};`,(err,account)=>{
  
      let cart_arr=JSON.parse(account[0].cart);
  
      for(let j=0;j<cart_arr.length;j++)
      {
        if(cart_arr[j].p_id==req.params.p_id)
         {    if(req.params.msg=="inc")
              cart_arr[j].quantity+=1;
              else if(req.params.msg=="dec")
              cart_arr[j].quantity-=1;
         }
      }
  
      con.query(`update accounts set cart='${JSON.stringify(cart_arr)}' where u_id=${user.u_id};`,(err)=>{
        if(err)
        console.log(err);
      })
     
    })
    res.json("ok");
  }

  module.exports={get_cartPage,load_cartItem,delete_cartItem,cart_itemQuantity}