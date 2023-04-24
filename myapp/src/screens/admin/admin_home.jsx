import Nav from '../../components/Navbar/Nav.jsx'
import Container from '../../components/container/container.jsx';
import PContainer from '../../components/pro_container/container.jsx'
import ProductList from '../../components/products_generator/product_list.jsx';
import Button from '../../components/Button/Button.jsx'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Stylee from '../../components/popup_div/popup.module.css';

let Admin_home=()=>{  
    let Navigate=useNavigate();
    let [popup,show_popup] = useState(false);

    const Popup_div=()=>{    ///////   popopop upupup   divvvvvvvv
        let [image,setimage]=useState("");
        let [data,setdata] = useState({name:"",price:"",imgurl:"",stock:"",des:""})

        function handleimage(e){
            setimage(e.target.files[0]);
        }
        const update_data=(event)=>{
   
          setdata({...data,[event.target.name]:event.target.value});
         }

        const add_product=async (event)=>{
        event.preventDefault();
               
        let filedata=new FormData();
        filedata.append('pro_image',image);

        let res=await fetch("http://localhost:8000/add_pro_img",{
            method:'POST',
            body:filedata,
        })  
        res=await res.json();

        data.imgurl=res.filename;  /// setting image file name

        console.log(data);  //
        let result= await fetch("http://localhost:8000/add_pro",{
             method:"POST",
             body:JSON.stringify(data),
             headers:{"content-type":"application/json"}
         });
     
         result= await result.json();
    
         if(result=="added")
         alert("Product added sucessfully !");

         show_popup(false);
     
        }

        return(
            
         <div className={Stylee.container_details}>
            <div id={Stylee["details_div"]}>

            <button className={Stylee.cross_details} onClick={()=>{ show_popup(false)}}> X </button>
            <form id="pro_form" encType="multipart/form-data">
        
            <div className={Stylee.body_details}>
        
               <div className={Stylee.body1_details}>
        
                <label>Name:</label>
              <input type="text"  value={data.name} onChange={update_data} name="name"className={Stylee.name_details}/>
              <label>Stock:</label>
              <input  value={data.stock} onChange={update_data} name="stock" style={{width:'30%'}} type="number" className={Stylee.name_details}/>
               
                 <div className={Stylee.price1_details}>
                  <label >Price:</label>
                  
                  <input  value={data.price} onChange={update_data} name="price" type="number" style={{color:'rgb(83, 241, 117)'}}/>   
                </div>
        
            </div>    
        
            <div className={Stylee.img_details}>
                <h3>Select product pictures </h3>
                <input  type="file" name="pro_image" accept="image/*" onChange={handleimage} multiple={false}/>
             </div>
        
            </div>
        
                <div className={Stylee.div3}>
             <label htmlFor="desid"><b>DESCRIPTION :</b></label>
            <textarea className={Stylee.des_details} onChange={update_data} name="des" value={data.des} ></textarea> 
            
            
             <button className={Stylee.details_btn} type="button" onClick={add_product}>Add Product </button>
             </div>
                
             </form>
        </div>   
        </div>
        );
    }





    return (
        <>
        <Nav/>

       <Container  display="flex" flexDirection="column"  >

           
            <div className={Stylee.add_pro_div}>
            {
                (popup)?
               
                 <Popup_div/>
                     
                :  ""
            }
            </div>
      </Container>
      <Button  margin="10px" label="Add Product"  width="200px" fontSize="24px" border="1px solid lightblue" position="absolute" left="0" onClick={()=>{ show_popup(true) }} ></Button>
        <PContainer>
       
            <ProductList visitor="admin"/>
       
            
        </PContainer>
        </>
    );


   
}

export default Admin_home;