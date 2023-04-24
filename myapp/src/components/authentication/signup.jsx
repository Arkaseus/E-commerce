import react from  'react';
import styles from './style.module.css'
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
let Signup=()=>{
      
            let [user_data,setuser_data]=useState({name:"",email:"",pass:"",cpass:""});
            let [message,setmessage]=useState("");
            const navigate=useNavigate();

            function datachanged(event){
                setuser_data({...user_data,[event.target.name]:event.target.value})
            }

           async function submit_data(event)
            {
                event.preventDefault();
                if(validate(user_data))
                { 
                    delete user_data.cpass;

                     let result=await fetch("http://localhost:8000/signup",{
                        method:"POST",
                        body: JSON.stringify(user_data),
                        headers:{"Content-type":"application/json"}
                    })

                     if(result.status==403)
                       setmessage("Account already exists !")
                     else
                     {
                        result= await result.json();
                    
                        if(result=="ok")
                        {
                        console.log("signup sucessfull");
                        navigate("/signin");
                        }
                     }
                }
             
               
            }

    return (
        <>
        <Link to="/home" ><button className={styles.home_btn}>Home</button></Link>
        
    <div id="fc1"className={styles.formcontainer}>
       
    <form  id="form1" >
        
    <h2 style={{marginBottom:'30px'}}><u>Create Your Account</u></h2>
            <label><b>Account Name</b></label>
            <input  type="text" name="name" placeholder="  Account name" onChange={datachanged} value={user_data.name} required/>

            <label> <b>Email</b></label>
            <input  type="email" name="email" placeholder="  Email" onChange={datachanged} value={user_data.email} required/>

            <label><b>Password</b></label>
            <input type="password" name="pass"placeholder="  password" onChange={datachanged} value={user_data.pass} required/>

            <label><b>Confirm Password</b></label>
            <input type="password" name="cpass" placeholder="  Confirm password" onChange={datachanged} value={user_data.cpass} required/>

            <button type='button' onClick={submit_data}>submit</button>
        
            <p><b>Already a member? </b><a href="/signin">Login</a></p>
            <br/>
            <h2>{message}</h2>
        </form>
        
    </div>
    </>
    )

    function validate(fm)
{
    if(fm.pass!=fm.cpass)
    {
        alert("Confirm password did not match");
        return false;
    }
    let re1=/[0-9]/;
    let re2=/[a-z]/;
    let re3=/[A-Z]/;

    if (fm.pass.length<6 || !re1.test(fm.pass) || !re2.test(fm.pass)|| !re3.test(fm.pass))
    {
        alert(" * Password length must be minimum 6 characters: \n * One digit atleast \n * One UPPERCASE letter atleast \n * One lowercase letter atleast  ");

        return false;
    }
    
    return true;

}

}

export default Signup;