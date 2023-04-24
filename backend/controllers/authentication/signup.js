let con=require("../../connection.js");
let nodemailer=require("nodemailer");

const signup_get=(req,res)=>{    /// ///    sign up module

    res.render("signup.ejs",{login:"true"});
}

const signup_post=async (req,res)=>{

    con.query(`select * from accounts where email="${req.body.email}"`,async (err,data)=>{

    if(data.length>0)
         {
           
           res.sendStatus(403);
         }
    else{
       con.query(`INSERT INTO accounts (name,email,pass,cart) values("${req.body.name}","${req.body.email}","${req.body.pass}",null);`,(err,data)=>{
        if(err)
        console.log(err);
        })
           res.json("ok");
         }
     })

 }

 const verify_email=(req,res)=>{

    if(req.body.otp==req.session.otp)
  {  const id=Date.now();
     con.query(`INSERT INTO accounts values(${id},"${req.session.name}","${req.session.email}","${req.session.pass}",null);`,(err,data)=>{
      if(err)
      console.log(err);
      })
       delete req.session.email;
       delete req.session.pass;
       delete req.session.otp;
      
         req.session.isLoggedin=true;
         req.session.uid=id;
  
         res.render("home.ejs",{name:req.session.name});
     
      }
   else{
          res.render("email.ejs");
       }
  }

 module.exports={signup_get,signup_post,verify_email}