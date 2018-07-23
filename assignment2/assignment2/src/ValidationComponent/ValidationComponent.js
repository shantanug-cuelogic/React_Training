import React from 'react';


const ValidationComponent = (props) => {
    if(props.length>5)
    return <p>Length is Big</p>  

    else if (props.length<=5)
    return <p> Length is Short </p>
}

export default ValidationComponent;
