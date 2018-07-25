import React, { Component } from 'react';
import classes from './prac.css';
import withClass from '../../../HOC/HOC';

class Person extends Component
{
    render() {

    return (
        <withClass className={classes.Prac}>
            <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
            <input type="text" onChange={this.props.change} value={this.props.name} />          
        </withClass>
    );
    }
}



export default Person;
