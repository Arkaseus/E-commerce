import React from 'react';

let Styles={ 
    backgroundColor:'rgb(255, 255, 255)',
    width:'100VW',
    height:'auto'

};

const Container=(props)=>{
return ( <>
    <div className='custom-container' style={{...Styles,...props }}>
    {props.children}
    </div>
    </>
);
};

export default Container;