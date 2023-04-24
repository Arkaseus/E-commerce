let multer=require("multer");
let upload=multer({dest:"./uploads/pro_image"});
let con=require("../connection.js");
let fs=require("fs");

const delete_product=(req,res)=>{  /////delete product via admin

    con.query(`select * from products where p_id=${req.params.p_id}`,(err,data)=>{
 
      const path = `./uploads/pro_image/${data[0].imgurl}`;
  
     fs.unlink(path, (err) => {
     if (err) {
       console.error(err)
       return
      }
  
    });
  })
   con.query(`delete from products where p_id=${req.params.p_id}`);

   res.json("deleted");
  }

  const update_product=(req,res)=>{          //// admin update product
    ////
    if(req.body.imgurl==0)
    {
      con.query(`update products set name="${req.body.name}",des="${req.body.des}",price=${req.body.price},stock=${req.body.stock} where p_id=${req.body.p_id}`,(err)=>{
        if(err)
        console.log(err);
      
      });

    }
    else
    {
       con.query(`select * from products where p_id=${req.body.p_id}`,(err,data)=>{
  
       const path = `./uploads/pro_image/${data[0].imgurl}`;
  
          fs.unlink(path, (err) => {
            if (err) {
            console.error(err)
            return
           }
         });
       })
  
       con.query(`update products set name="${req.body.name}",imgurl="${req.body.imgurl}",des="${req.body.des}",price=${req.body.price},stock=${req.body.stock} where p_id=${req.body.p_id}`,(err)=>{
        if(err)
        console.log(err);
      
      });
      
    }
    res.json("updated");
  }

  const upload_productImg=(req,res)=>{    ////admin upload product image
    res.send(req.file);
  }

  const add_product=(req,res)=>{        //// admin add product

    con.query(`insert into products (name,imgurl,des,price,stock) values("${req.body.name}","${req.body.imgurl}","${req.body.des}",${req.body.price},${req.body.stock})`);
    res.json("added");
  }

  module.exports={add_product,update_product,delete_product,upload_productImg}