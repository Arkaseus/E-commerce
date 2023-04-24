const jwt=require("jsonwebtoken");
const secretKey="alkjasqiuewlmna0823473271";

const adminget=(req,res)=>{       /// admin signin module
  
     
}

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

const adminpost=(req,res)=>{

    if(req.body.email=="admin@gmail.com" && req.body.pass=="123")
    {
        const token= jwt.sign(
            {
              ...req.body
            } ,secretKey,{expiresIn:"300s"}

            );
            res.json({token});

    }
    else
    {
        res.status(401);
    }
    
    }


    module.exports={adminget,adminpost,verify_token};