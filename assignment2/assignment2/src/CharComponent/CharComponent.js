import React from 'react';
import './CharComponent.css'


const CharComponent = (props) => {
    return <p className="blocks"  onClick={props.click}  > {props.show}</p>


}

export default CharComponent;