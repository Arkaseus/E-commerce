import { useState } from "react"; 
import Style from '../../screens/cart/cart.module.css'

const Cart_products=({product})=>{
    const token=localStorage.getItem("user_token");

    let [quantity,setQuantity]=useState(product.quantity);
    let imgpath="http://localhost:8000/pro_image/"+product.imgurl;


    async function remove_cartitem(p_id){
        await fetch("http://localhost:8000/remove_cartitem"+p_id,{ headers:{"authorization":token}});       
        location.reload();
}

async function inc_quant(id){
    setQuantity(quantity=> quantity+1)
    let res=await fetch("http://localhost:8000/cart_product_quant"+id+"inc",{ headers:{"authorization":token}});
}
async function dec_quant(id){
  
  if(quantity>1)
  {  setQuantity(quantity=> quantity-1)
      await fetch("http://localhost:8000/cart_product_quant"+id+"dec",{ headers:{"authorization":token}});
  }
}

 return (
    
         <div className={Style.card_holder}>
            <div className={Style.cart_card}>

         <div className={Style.c_image}>
                <img className={Style.pro_image} src={imgpath} />
         </div>
            <div className={Style.c_cardbody}> 
                    <span>{product.name}</span>
                    <br/>
                    <div className={Style.c_price}>
                    <span> &#8377; {product.price}</span>    
                    <br/>
                    <div className={Style.c_options}>
                    <div className={Style.product_quantity}>
                        <button className={Style.quant_btn} onClick={()=>{dec_quant(product.p_id)}}>-</button>
                        <input type="number" value={quantity}  className={Style.price_input}  min="1" max="1000" />
                        <button className={Style.quant_btn} onClick={()=>{inc_quant(product.p_id)}}>+</button>
                    </div> 
                        <button className={Style.delete_btn} onClick={()=>{ remove_cartitem(product.p_id)}} >Delete</button>         
                        {/* onclick=remove_cartitem(${cart_prod[i].p_id}) */}
                    </div>

               </div>         
         </div>

       </div>
     </div>
    );
}

export default Cart_products;