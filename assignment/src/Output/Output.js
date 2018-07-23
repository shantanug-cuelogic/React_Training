import React from 'react';

const output =(props)=>{
    return (
        <div>
            <p>some random text and useful content{props.content}</p>
            <p>another random text useful content{props.content} </p>
        </div>
    );
}


export default output;