import react from  'react';
import Styles from './container.module.css'
import {Link} from 'react-router-dom';
import {useState} from 'react';

let  Container=(props)=>{

    return (
        <>
      
         <div id="con1"className={Styles.container}>  
         
            {props.children}
         </div>
          
        </>
    );

}

export default Container;
