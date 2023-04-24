import Styles from './card.module.css'
import Stylee from '../../components/popup_div/popup.module.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

let Card=(props)=>{

    let Navigate=useNavigate();

    let imgurl=props.product.imgurl;
    let path="http://localhost:8000/pro_image/"+imgurl;

   async function delete_product(p_id)
    {  
        let result=await fetch("http://localhost:8000/delete_pro"+p_id);
        result=await result.json();
        console.log("delete btn "+result)
        if(result=="deleted")
       alert("Product deleted sucessfully !");
   
    }

   

////////////////
    return (
       
        <div className={Styles.cardholder}>
        <div className={Styles.card}>

        <div className={Styles.image}>
            <img className={Styles.pro_image} src={path}/>
        </div>
        <div className={Styles.cardbody}> 
                <h3>{props.product.name}</h3>

                <div className={Styles.price}>
         
                
                <h4> &#8377; {props.product.price}</h4>    
                </div> 
                  
        </div>
       { (props.visitor=="admin")?
        
        <div className={Styles.view_class}>     
              <button  className={Styles.view_btn} onClick={()=>{ return (Navigate( '/update_pro',{ state: props.product }));}}>update</button>
              <button  className={Styles.view_btn} onClick={async ()=>{return delete_product(props.product.p_id)}}>Delete</button>
              </div>
            //   onclick="update_pro(${p.p_id})"
            :
            <div className={Styles.view_class}>
            <button className={Styles.view_btn} onClick={()=>{ return (Navigate( '/home',{ state: props.product}));}} >View Details</button>
            {/* onclick="getdetails(${p.p_id})" */}
            </div>
            
        
      }
</div>
</div>

    );
}

export default Card;