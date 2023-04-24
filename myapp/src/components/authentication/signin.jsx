import react from  'react';
import styles from './style.module.css'
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';

let signin=()=>{

    let navigate= useNavigate();

    let [user_data,setuser_data]=useState({email:"",pass:""});
    let [message,setmessage]=useState("");

    function datachanged(event){
        setuser_data({...user_data,[event.target.name]:event.target.value})
    }

    async function submit_data(event){
             
        let response=await fetch("http://localhost:8000/signin",{
            method:"POST",
            body: JSON.stringify(user_data),
            headers:{"Content-type":"application/json"}
        })
        if(response.status==401)
        {
        setmessage("invalid Credentials !");
        }
        else
        {   response= await response.json();
           
           localStorage.setItem("user_token",response.token);  //token
           if(response.token)
           {
               let res=await fetch("http://localhost:8000/home",{
                headers:{"authorization":response.token}
               })
               if(res.status==200)
                navigate("/home");             
           }
        }
    }
    
    return ( 
        <>
          <Link to="/home" ><button className={styles.home_btn}>Home</button></Link>
    <div className={styles.formcontainer}>
        
        <form id="form2"  >
            <h1 style={{marginBottom:"30px"}}><u>Login</u></h1>
            <label><b>Email</b></label>
            <input className={styles.input} type="email" onChange={datachanged} value={user_data.email} name="email"placeholder="  email"/>
            <label><b>Password</b></label>
            <input className={styles.input}  type="password" onChange={datachanged} value={user_data.pass} name="pass" placeholder="  password"/>

            <button className={styles.button} type='button' onClick={submit_data} >submit</button>
             <p><Link to="/forgot_pass" >Forgot your password ?</Link></p>
            <p><b>New user? </b><Link to="/signup">Create your account</Link></p>
             <br/>
            <h2>{message}</h2>
                 
        </form>            
    </div>
    </>
);              

}

export default signin;

{/* 
<style>

        body{ 
                margin:0 0 0;
            }
.formcontainer{
  background-color: rgb(129, 224, 236);
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
}
form{ background:rgb(86, 169, 247);
    display:flex;
    flex-direction:column;
    width:400px;
    height:500px;
    padding: 20px;
    box-shadow:6px 6px 6px blue;
     
}
form label{
    padding: 5px;
    margin-top: 5px;

}
form input{
    padding:5px;
   width:360px;
   height: 30px;
   border-radius: 20px;
   box-shadow: 2px 2px 2px;
}
form button{  box-shadow: 2px 2px 3px;
    margin-top:15px;
    padding: 8px;
    width:100px;
    cursor:pointer;
}
a{
    text-decoration:none;
}

</style> */}