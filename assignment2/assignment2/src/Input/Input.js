import React from 'react';
import './Input.css'
const Input =(props)=>{
    return( 
    
        <div className='inputelements'> 
        
        <input type="text"  onChange ={props.change} /> 
        <p>The length is : {props.length}</p>
        </div>

    
    );
}

export default Input;