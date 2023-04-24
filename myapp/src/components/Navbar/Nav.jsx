import Styles from "./nav.module.css";
import {Link,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react'

let Nav=()=>{
   let Navigate=useNavigate();

    let handle_signout=()=>{
        localStorage.clear();
        Navigate("/home");
    }

    let [islogin,setlogin]=useState(false);

  useEffect(()=>{
    let token=localStorage.getItem("user_token") ||localStorage.getItem("admin_token");
      if(token==null)
       setlogin(false);
      else
      setlogin(true);

  },[handle_signout])
  

    return (
        <>
        <div className={Styles.nev}>
            <div className={Styles.left}>  
                {/* <!-- <a href="#"><img src="sources/1.jpg"></a>1 --> */}
                <Link to="/"> <span>Build my Pc</span></Link> 
            </div>
            <div className={Styles.right}>
    
                { (islogin)?"" :<Link to="/admin_signin"><button >Admin here</button></Link> }
                  { (islogin)  ?  <button onClick={handle_signout}>sign-out</button> 
                    :
                    <Link to="/signin" ><button>Sign-in</button></Link>
                  }
                <Link to="/cart" ><button >Cart</button></Link>
                <Link to="#" ><button>About</button></Link>
            </div>
          </div>
    
         </>
    )
}

export default Nav;