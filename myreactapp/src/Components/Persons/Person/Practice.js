import React from 'react';
import classes from './prac.css';


const Practice = (props) => {


    return (
        <div className={classes.Prac}>
            <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
            <input type="text" onChange={props.change} value={props.name} />          
        </div>
    );
}



export default Practice;
