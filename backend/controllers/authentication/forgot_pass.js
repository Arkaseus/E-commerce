let nodemailer=require("nodemailer");

const get_forgotpage=(req,res)=>{      ///forgot password page
    res.render("forgot_pass.ejs");
  }

const forgot_pass=async (req,res)=>{       ///forgot password
    let present=0;
    fs.readFile("account.json","utf-8",async (error,data)=>{
      let i=0;
      let acc_arr=JSON.parse(data);
    
      for( i=0;i<acc_arr.length;i++)
      {
        if(acc_arr[i].email==req.body.email)
           { 
            present=1;
            break;
           }
      }
    
      if(present==0)
      { 
           res.render("signin.ejs",{login:"Email does not exist !"});
      }
      else{
        const key=Date.now();
        req.session.key=key;
        const link=`http://localhost:8000/reset_pass${key}`
    
        let testaccount= await nodemailer.createTestAccount();
    
            let transport=await nodemailer.createTransport({
              host: "smtp.ethereal.email",
              port: 587,
              auth:{
                user:"mateo.hirthe22@ethereal.email",
                pass:"yUa6keDPfYH8QrRKSs"
              }, 
          
            });
          
            let info=await transport.sendMail({
              from:'"AKA-Computers" <aka@gmail.com> ',
              to: `${req.body.email}`,
              subject: "Password reset link",
              html:` <h3> Click the below Button to reset your password.</h3><br>
                     <a href="${link}"><button>Reset Password</button></a>`,
            });
     
            res.render("signin.ejs",{login:"Password reset link sent to your email."});
      }
    
    })
    
    }

    const forgot_pass1=(req,res)=>{       ///reset password
    
        if(req.session.key==req.params.key)
        {
          res.render("reset_pass.ejs");
        }
        else
        {
          res.send("link has been expired !");
        }
      }

      const forgot_pass2=(req,res)=>{          /// final reset password
        fs.readFile("account.json","utf-8",(error,data)=>{
          let i=0;
          let acc_arr=JSON.parse(data);
          for( i=0;i<acc_arr.length;i++)
          {
            if(acc_arr[i].id==req.session.uid)
               { 
                acc_arr[i].pass=req.body.pass;
                fs.writeFile("account.json",JSON.stringify(acc_arr),(error)=>{
                })
                break;
               }
          }
        })
        res.render("signin.ejs",{login:"Password changed sucessfully !"});
      }

      module.exports={get_forgotpage,forgot_pass,forgot_pass1,forgot_pass2}