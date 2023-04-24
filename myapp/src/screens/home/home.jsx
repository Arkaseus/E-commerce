
import Nav from '../../components/Navbar/Nav.jsx'
import Container from '../../components/pro_container/container.jsx'

import ProductList from '../../components/products_generator/product_list.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import Stylee from './popupdiv.module.css';

let Home=()=>{
    let {state}=useLocation();
  
     let Navigate =useNavigate();

    // async function getdata(){ 
    //     let res=await fetch("http://localhost:8000/getdetails"+state) 
    //      product=await res.json();
        
    //      console.log(product)
    // }

    const Popup_div=()=>{ 
    let  imgpath="http://localhost:8000/pro_image/"+state.imgurl;     

    async function addto_cart(product)   // add to cart button
    {
      if(product.stock>0)
      {    let token=localStorage.getItem("user_token");
         let res=await fetch("http://localhost:8000/add_tocart",{
           method:"POST",
           body:JSON.stringify(product),
           headers: { "Content-type": "application/json" ,"authorization":token}
         })
         res= await res.json();
   
         if(res=="not_loggedin")
             location.href=location.origin+"/signin";
         else
         if(res=="added")
         {
            alert("Item added to cart ");
         }
         else if(res=="already_present")
         Navigate("/cart");

      }
      else
      alert("Item out of stock !");
    }
   
  return (     

   
    <div id={Stylee["container_details"]}>
        <div id={Stylee["details_div"]}>
   
        <button id={Stylee["cross_details"]} onClick={()=>{ Navigate(-1)}}> X </button>
         <div className={Stylee.img_details}>
        <img className={Stylee.pro_image} src={imgpath}/>
         </div>
    
        <div className={Stylee.body_details}>
    
        <div className={Stylee.body1_details}>
           <span className={Stylee.name_details}> {state.name} </span>
           <span className={Stylee.stock_details}>{state.stock}</span>::Stock 
        </div>
         <div className={Stylee.body2_details}>
             <div className={Stylee.price1_details}>
              <span>Price:</span>
              
              <span style={{color:'rgb(83, 241, 117)'}}> &#8377 {state.price} </span>    
            </div>      
            <div>
            <button className={Stylee.details_btn}  >Buy Now</button>
            <button  className={Stylee.details_btn} id={Stylee["cart_btn"]} onClick={()=>{addto_cart(state)}} >Add To Cart</button>
            </div>
         </div>
       
        </div>
    
        <div className={Stylee.body3_details}>
        <span><b>DESCRIPTION :</b></span>
        <span className={Stylee.des_details}><br/><br/>{state.des}</span>
        </div>
    
        </div>
        </div>
    )
         
    }

    return (
    <>
      <Nav/>

     

        <Container>

        {
                (state)?
                
                 <Popup_div/>
                
                :  ""
         }
     <ProductList visitor="user"/>
        </Container>
    
    </>

    );

}

export default Home;
