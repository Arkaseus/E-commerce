import Nav from '../../components/Navbar/Nav.jsx'
import Styles from './cart.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

import Cart_products from '../../components/Cart_products/Cart_products.jsx'

const Cart=()=>{
    
     let price=0,counter=0;
     let [loading,setloading]=useState(true);
     let[data,setdata]=useState(null);

    let Navigate=useNavigate();

useEffect( ()=>{
    const token=localStorage.getItem("user_token");

    async function loaddata(){
        let cart_prod=await fetch("http://localhost:8000/load_cart",{
            headers:{"authorization":token}
        });
    
        cart_prod=await cart_prod.json();
        cart_prod=JSON.parse(cart_prod);
         setdata(cart_prod);
         setloading(false)
         
        }
      
        if(token)
        {
           loaddata();
           
        }
        else
        {   
            Navigate("/signin");
        }
 
 },[]);

    return (
<>
<Nav/>
        
        
        <div className={Styles.cart_container}>
        <h1 className={Styles.heading1}>Your Items</h1>
           <div id={Styles["cart_left"]}>
           { 
              loading ? (
                <h2>Loading...</h2>
              ) : (
                  
               data.map((element)=>{
                {counter+=1}
                {price+=element.price}

                return <>
                      <Cart_products key={element.p_id} product={element} />  
                </>
             })  
              
              )
               
           }
               
           </div>
           <div className={Styles.cart_right}>
             <h1>Price Details</h1>
               <div className={Styles.total_items}>
            <h2> Total Items: <span id="total_item">{counter}</span></h2>
               </div>
               <h2>Delivery Charges:<span style={{color:'rgb(108, 252, 115)'}}> FREE Delivery</span></h2>
               <div className={Styles.total_amount}>   <h2>  Total Amount: &#8377; <span className={Styles.amount}>{price}</span></h2>
               </div>
           </div>
        </div>

        </>
        )
}

export default Cart;