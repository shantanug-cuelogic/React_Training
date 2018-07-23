import React from 'react';

const input =(props)=>{
    return <input type="text" onChange={props.change} value= {props.content}/>
}


export default input;