import Nav from '../../components/Navbar/Nav.jsx'

import Container from '../../components/container/container.jsx'

import {useNavigate,useLocation} from 'react-router-dom'
import { useState} from 'react';
import Stylee from '../../components/popup_div/popup.module.css';

let Update_pro=()=>{  
    let Navigate=useNavigate();
    const {state} = useLocation();

    const Popup_div=()=>{    ///////   popopop upupup   divvvvvvvv

        let [image,setimage]=useState("0");
        let [data,setdata] = useState({p_id:state.p_id,name:state.name,price:state.price,imgurl:"0",stock:state.stock,des:state.des})

        function handleimage(e){
            setimage(e.target.files[0]);
         }
         const update_data=(event)=>{
          setdata({...data,[event.target.name]:event.target.value});
         }

         const update_product=async ()=>{
                if(image!="0")
                {
                    let filedata=new FormData();
                        filedata.append('pro_image',image);
                    let result=await fetch("http://localhost:8000/add_pro_img",{
                        method:'POST',
                        body:filedata
                        })
                    let imgname=await result.json();
                    data.imgurl=imgname.filename;
                }
                else
                {
                    data.imgurl=0;
                }   

                console.log(data);
                let result=await fetch("http://localhost:8000/update_pro",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{"content-type":"application/json"}
                });


                result=await result.json()
                if(result=="updated")
                alert("Product updated sucessfully !");

         }
      
        return(
            
         <div className={Stylee.container_details}>
            <div id={Stylee["details_div"]}>

            <button className={Stylee.cross_details} onClick={()=>{ Navigate(-1)}}> X </button>
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
             <button className={Stylee.details_btn} type="button" onClick={update_product}>Update Product</button>
             <button className={Stylee.details_btn} type="button" onClick={()=>{ Navigate(-1)}}>Cancel</button>
             </div>
                
             </form>
        </div>   
        </div>
        );
    }





    return (
        
        <>
        
        <Nav/>
        <Container backgroundColor="rgb(167, 255, 193)" height="100vh">
                 <Popup_div/> 
        </Container>
         </>
    );


   
}

export default Update_pro;