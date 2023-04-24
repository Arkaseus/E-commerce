const jwt=require("jsonwebtoken");
const secretKey="alkjasqiuewlmna0823473271";

const getIndex=(req,res)=>{      /// get landing page router

  }

  const verify_token=(req,res,next)=>{

    let token=req.headers['authorization'];
   console.log(token);
    if(!token){
      console.log("in if");
      return res.status(401).send("Unouthorized");
    }
    else{
      console.log("in else");
    try{
      const decoded=jwt.verify(token,secretKey);
      console.log(decoded);
      next();
    }
    catch(err){
      res.status(401).send('Unauthorized');
    }
  }

  }
  
  const getHome=(req,res)=>{            ///        get home route 
      console.log('inside gethome')
     res.status(200).send("success");
  }

  module.exports={getIndex,getHome,verify_token};