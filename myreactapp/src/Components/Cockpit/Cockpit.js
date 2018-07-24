import React from 'react';
import classes from './Cockpit.css'

const cockpit =(props) =>{
    
    const dynamicstyle = [];
    if(props.person.length ===0)
    {
      dynamicstyle.push(classes.one);
    }
    if(props.person.length ===1)
    {
      dynamicstyle.push(classes.two);
    }
    if(props.person.length ===2)
    {
      dynamicstyle.push(classes.three);
    }
    if(props.person.length ===3)
    {
      dynamicstyle.push(classes.four);
    }
    if(props.person.length ===4)
    {
      dynamicstyle.push(classes.five);
    }


    let buttonstyle = '';
    if(props.status){
    buttonstyle=classes.red;
    }
    
    return(
        <div className={classes.Cockpit}>
        <h1>First react App</h1>
        <h3 className={dynamicstyle}>Changes Color According to Manipulation </h3>
        <button className={buttonstyle}
            onClick={props.click}> CLick me </button>
        </div>
    );

};

export default cockpit;