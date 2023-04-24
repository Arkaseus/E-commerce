let con=require("../connection.js");
const jwt=require("jsonwebtoken");
const secretKey="alkjasqiuewlmna0823473271";

const loadproducts=(req,res)=>{     ///  load all products 

    con.query(`select * from products;`,(err,data)=>{
          let obj=[];
          
           for(let i=0;i<data.length ;i++)
           {
             obj.push(data[i]);
           }
              res.json(obj);
          }) 
  }

  const getproducts=(req,res)=>{    ///   get details of product 
    
    con.query(`select * from products where p_id=${req.params.p_id}`,(err,data)=>{
     res.json(data[0]);
    }) 
}

const add_product_tocart=(req,res)=>{          ////       add product to cart 
 
/// check if is the user logined or not
    let token=req.headers["authorization"];
    let user=jwt.verify(token,secretKey);
    if(user)
    {    con.query(`select * from accounts where u_id="${user.u_id}";`,(err,account)=>{
            
      let already=0;
      let cart_arr=JSON.parse(account[0].cart);
   
      if(cart_arr==null)
       cart_arr=[];

       for(let j=0;j<cart_arr.length;j++)
       { 
          if(cart_arr[j].p_id==req.body.p_id)
            {  already=1;
              break;
            }
       }
      if(already==1)
      {
        res.json("already_present"); 
      }
      else
       {    let obj={
             p_id:req.body.p_id,
             name:req.body.name,
             imgurl:req.body.imgurl,
             price:req.body.price,
             quantity: 1
            }
        
        cart_arr.push(obj);

        con.query(`update accounts set cart='${JSON.stringify(cart_arr)}' where u_id=${user.u_id}`,(err)=>{
          if(err)
          console.log(err);
        })
          res.json("added");
       }
    

      })
    
    }
    else
    res.status(401).json("unauthorized");
}

  module.exports={loadproducts,getproducts,add_product_tocart}