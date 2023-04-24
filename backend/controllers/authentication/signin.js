let con=require("../../connection.js");
const jwt=require("jsonwebtoken");
const secretKey="alkjasqiuewlmna0823473271";

const verify_token=(req,res,next)=>{
  const bearerHeader=req.headers["authorization"];

  if(typeof bearerHeader!=='undefined')
  {
  const bearerToken=bearerHeader.split(" ")[1];

  req.token=bearerToken;
  next();
  }
  else{
    res.sendStatus(403);
  }

}

const signin_get=(req,res)=>{        /////     sign-in   module

      res.send("home ")
  
} 


const signin_post=(req,res,next)=>{
 
    con.query(`select * from accounts where email="${req.body.email}" and pass="${req.body.pass}"`,async (err,data)=>{
  if(err)
  console.log(err);

   if(data.length>0)
        {    console.log(data[0]);
            const token= jwt.sign(
              {
                ...data[0]
              } ,secretKey,{expiresIn:"30000s"}
  
              );
              res.json({token});
          // res.json("signin sucess")
        }
    else {
           res.sendStatus(401);
        }
  })
}

module.exports={verify_token,signin_get,signin_post}